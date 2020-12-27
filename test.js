const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite')

const staticPath = path.resolve(__dirname, 'common/dist/index.html');
const targetPath = path.resolve(__dirname, 'view');

const buf2 = new Buffer.from(['0xc0', '0xb4', '0xd7', '0xd4'])


const str = iconv.decode(buf2, 'GB2312')

console.log(buf2.toString())
console.log(str)
