// Promise A+规范
// https://promisesaplus.com/

// 关键的点
// 1.res(0) 中的参数怎么传递给then注册的函数
// 2.当Promise参数函数中抛出错误时 then的第二个函数来接
// 3.如何在promise中异步操作?
// setTimeout(() => {res(0);},100);
// 同步操作中先res(0)触发状态改变,然后才进行then调用
// 异步操作中是先进行then调用,然后才触发res(0)改变状态
// //这里有个坑需要注意一哈
// 当promise函数里面是异步并且setTimeout(fn,0),then中也是异步的时候setTimeout(fn,0)
// 会先执行promise里面的函数,此时状态改变了,那就先执行了CallBackList,此时CallBack里面是
// 没有东西的，必须等到then异步执行之后,then中的返回值作为参数传给res或rej再执行一遍
// 
// 4.链式操作：第一个then的返回值作为第二then的参数
// 5. then异步操作：每一then注册的是一个微任务,不影响同步代码
// 6. then中报错,下一个then的rej注册函数接着这个错误
// 7. 会略过空then 
// 8. then返回值是Promise的情况

function myPromise(executor){
  var self = this;
  self.status = 'pending';
  // self.then = function(success,fail){
  //  self.success = success;//当前的success参数需要等到调用then方法传参,而此时的MyPromise参数函数是同步执行的,所以在这一步的时候还没有调用then
  //  self.fail = fail;//既然这样then方法就必须放到原型上了
  // }
 
  //这里的then要放到原型上,所以rej和res传过来的值要存在当前对象上
  self.resolveValue = null;
  self.rejectReason = null;
  self.ResolveCallBackList = [];
  self.RejectCallBackList = [];
 
  function resolve(value){
   if(self.status === 'pending'){
    // console.log(self.status);
    self.status = "Fulfilled";
    self.resolveValue = value;
    self.ResolveCallBackList.forEach((ele) => {
      console.log(ele)
     ele();
    });
    // self.success(value); //此步骤为错误做法,仅仅供参考
   }
  }
 
  function reject(reason){
   if(self.status === 'pending'){
    self.status = 'Rejected';
    self.rejectReason = reason;
    self.RejectCallBackList.forEach((ele) => {
     ele();
    });
    // self.fail(reason);//此步骤为错误做法,仅仅供参考
   }
  }
  
  try{
   executor(resolve,reject);
   // self.then = function(success,fail){
   //  self.success = success;
   //  //当前的success参数需要等到调用then方法传参,而此时的MyPromise参数函数是同步执行的,所以在这一步的时候还没有调用then
   //  self.fail = fail;
   //  //既然这样then方法就必须放到原型上了,但是也可以放到MyPromise参数函数executor执行之后(这样就太麻烦了)
   // }
  }catch(e){
   reject(e);
  }
 
 }
 
 // 处理返回值为promise对象
 function ResolutionReturnPromise(nextPromise,returnValue,res,rej){
  if(returnValue instanceof myPromise){
   returnValue.then((val) => {
    res(val);
   },(reason) => {
    rej(reason);
   });
  }else{
   res(returnValue);
  }
 }
 
 //每个promise对象多能访问then方法,所以放到原型上避免重复
 myPromise.prototype.then = function(onFulfilled,onRejected){
  var self = this;
 
  //如果为空then
  if(!onFulfilled){
   onFulfilled = function(val){
    return val;
   }
  }
  
  if(!onRejected){
   onRejected = function(reason){
    throw new Error(reason);
   }
  }
 
   console.log(self.status,'---');
 
  var nextPromise = new myPromise((res,rej) => {
   if(self.status == 'Fulfilled'){
     // 存的是上一个promise的状态,和当前的new myPromise是两码事
    setTimeout(function(){
     try{
      // var nextResolveValue = onFulfilled(self.resolveValue);
      // res(nextResolveValue);
 
      //返回是promise的情况需要判断
      var nextResolveValue = onFulfilled(self.resolveValue);
      ResolutionReturnPromise(nextPromise,nextResolveValue,res,rej)
     }catch(e){
      rej(e);
     }
    },0);
   }
     
   if(self.status == 'Rejected'){
    setTimeout(function(){
     try{
      // var nextRejectValue = onRejected(self.rejectReason);
      // res(nextRejectValue);
 
      var nextRejectValue = onRejected(self.rejectReason);
      ResolutionReturnPromise(nextPromise,nextRejectValue,res,rej)
     }catch(e){
      rej(e);
     }
    },0);
   }
 
   //异步
   if(self.status == 'pending'){
    // console.log(self.status);
    self.ResolveCallBackList.push(() => {
     setTimeout(function(){
      try{
       // var nextResolveValue = onFulfilled(self.resolveValue);
       // res(nextResolveValue);
 
       var nextResolveValue = onFulfilled(self.resolveValue);
       ResolutionReturnPromise(nextPromise,nextResolveValue,res,rej)
      }catch(e){
       rej(e);
      }
     },0);
    });
 
    self.RejectCallBackList.push(() => {
     setTimeout(function(){
      try{
       // var nextRejectValue = onRejected(self.rejectReason);
       // res(nextRejectValue);
 
       var nextRejectValue = onRejected(self.rejectReason);
       ResolutionReturnPromise(nextPromise,nextRejectValue,res,rej)
      }catch(e){
       rej(e);
      }
     },0);
    });
   }
  })
 
  return nextPromise;
 }
 
 
 //Promise.race([]);
 myPromise.race = function(promiseArr){
  return new myPromise(function(resolve,reject){
   promiseArr.forEach(function(promise,index){
    promise.then(resolve,reject);
   })
  });
 }
 
 myPromise.all = function(promiseArr){
  var counter = 0;
  var arrList = [];
  return new myPromise(function(resolve,reject){
   promiseArr.forEach(function(promise,index){
    promise.then((x) => {
     counter ++;
     arrList.push(x);
     if(counter == promiseArr.length){     
      resolve(arrList);
     }
    },(x) => {
     reject(x);
    });
   })
  });
 }