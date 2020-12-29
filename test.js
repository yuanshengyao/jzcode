const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const { exec, execSync, spawn, spawnSync, execFile, execFileSync } = require('child_process');
// const nodeCmd = require('./common/utils/nodecmd');

const staticPath = path.resolve(__dirname, 'common/dist/index.html');
const targetPath = path.resolve(__dirname, 'view');


var subProcess = spawn('bash');

function onData(data) {
  process.stdout.write(data);
}

subProcess.on('error', function() {
  console.log('error');
  console.log(arguments);
})

subProcess.stdout.on('data', onData);
subProcess.stdout.on('data', onData);
subProcess.on('close', (code) => {console.log(code)});

subProcess.stdin.write('cd / \n');
subProcess.stdin.write('pwd \n');
subProcess.stdin.write('ls');
subProcess.stdin.end();

