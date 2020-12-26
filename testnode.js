const fs = require('fs');
const path = require('path');

const staticPath = path.resolve(__dirname, 'common/dist/index.html');
const targetPath = path.resolve(__dirname, 'view');

// const buf3 = new Buffer.from('来自 42.19')

// const buf3 = new Buffer.from(['0xe6', '0x9d', '0xa5', '0xe8', '0x87', '0xaa', '0x34', '0x32', '0x2e', '0x31', '0x39'])

// const u8 = new Uint8Array(buf3)

// console.log(buf3)
// console.log(u8)
// console.log(buf3.toString())                                                                                                                      =  1  5     m  s     T  T  L  =     5  2

const buf2 = new Buffer.from(['0xc0', '0xb4', '0xd7', '0xd4'])

const u82 = new Uint8Array(buf2)

console.log(buf2)
console.log(u82)
console.log(buf2.toString())