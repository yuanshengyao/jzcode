const fs = require('fs');
const path = require('path');

const staticPath = path.resolve(__dirname, 'common/dist/index.html');
const targetPath = path.resolve(__dirname, 'view');

// fs.mkdirSync(targetPath);

// try {
//   fs.rmdirSync(targetPath);
// }catch(e) {}

// console.log(3233444);

let arr = [1,2,3,4,5,6,7,8]

function test() {
  arr.forEach((item, index) => {
    console.log(item);
    if(item > 4) {
      console.log('bbb')
      return;
    }
  })
  console.log('aaa');
}

test()
