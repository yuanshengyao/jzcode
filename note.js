// const buf2 = new Buffer.from(['0xc0', '0xb4', '0xd7', '0xd4'])
// const buf2 = new Buffer.from(['0xe6', '0x9d', '0xa5', '0xe8', '0x87', '0xaa', '0x65'])

/**
 * 来
 * 未知编码 0xc0          0xb4        这是bg2312编码
 * 二进制   1100 0000     1011 0100
 * 
 * 
 * 
 * utf-8       0xe6          0x9d         0xa5
 * 二进制      1110 0110     1001 1101     1010 0101
 * 可用编码         0110        01 1101      10 0101
 *              110 0111     01100101
 * 
*/

// child_process返回的buferr,应该对应的字符
// <Buffer c0 b4 d7 d4 20 34 32 2e 31 39 33 2e 31 32 34 2e 38 20 b5 c4 bb d8 b8 b4 3a 20> +
//                        4  2  .  1  9  3  .  1  2  4  .  8 
// <Buffer d7 d6 bd da 3d 33 32 20 ca b1 bc e4 3d 32 39 6d 73 20 54 54 4c 3d 35 30 0d 0a>
// 来自 42.193.124.8 的回复: 字节=32 时间=5ms TTL=50

/**
 * 解决中文乱码问题
 * const iconv = require('iconv-lite')
 * const buf2 = new Buffer.from(['0xc0', '0xb4', '0xd7', '0xd4'])
 * const str = iconv.decode(buf2, 'GB2312')
 * console.log(str)
*/

/**
 * 可以完整接收子进程回调data的写法
 * const { spawn } = require('child_process');
 * function spawnCommand(command, arr = []) {
    const commandObj = spawn(command, arr);
    commandObj.stdout.on('data', data => {
      const result = iconv.decode(data, 'GB2312');
      console.log(result);
    })
    commandObj.stderr.on('data', data => {
      console.log(command + ' ' + 'stderr\n', iconv.decode(data, 'GB2312'));
    })
    commandObj.on('close', code => {
      console.log(command + ' ' + 'exit\n', code);
    })
    commandObj.on('error', code => {
      console.log(command + ' ' + 'error\n', code);
    })
  }
  spawnCommand('npm.cmd', ['start'])
*/

