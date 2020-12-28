// '┌ └ ┘ ┐ ┬ ├ ┤ ┴ ┼ ─ │'

// 这里用到一个很实用的 npm 模块，用以在同一行打印文本
const slog = require('single-line-log').stdout;
function ProgressBar(description, bar_length){
  // 两个基本参数(属性)
  this.description = description || 'Progress';    // 命令行开头的文字信息
  this.length = bar_length || 25;           // 进度条的长度(单位：字符)，默认设为 25
  // 刷新进度条图案、文字的方法
  this.render = function (opts){
    var percent = (opts.completed / opts.total).toFixed(4);  // 计算进度(子任务的 完成数 除以 总数)
    var cell_num = Math.floor(percent * this.length);       // 计算需要多少个 █ 符号来拼凑图案
    // 拼接黑色条
    var cell = '';
    for (var i=0;i<cell_num;i++) {
      cell += '█';
    }
    // 拼接灰色条
    var empty = '';
    for (var i=0;i<this.length-cell_num;i++) {
      empty += '░';
    }
    // 拼接最终文本
    var cmdText = this.description + ': ' + (100*percent).toFixed(2) + '% ' + cell + empty + ' ' + opts.completed + '/' + opts.total;
    // 在单行输出文本
    slog(cmdText);
  };
}
// var pb = new ProgressBar();
// // 这里只是一个 pb 的使用示例，不包含任何功能
// var num = 0, total = 20;
// function downloading() {
//   if (num <= total) {
//     // 更新进度条
//     pb.render({ completed: num, total: total });
//     num++;
//     setTimeout(function (){
//       downloading();
//     }, 200);
//   }
// }
// downloading();

function printSkin1({}) {
  console.log('***********************************************************');
  console.log('*                                                         *');
  console.log('***********************************************************');
}


module.exports = {
  printSkin1
}