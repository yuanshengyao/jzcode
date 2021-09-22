const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const { exec, execSync, spawn, spawnSync, execFile, execFileSync } = require('child_process');
const nodeCmd = require('./common/utils/nodecmd');

const staticPath = path.resolve(__dirname, 'common/dist/index.html');
const targetPath = path.resolve(__dirname, 'view');


const subProcess = nodeCmd.bashCommand()


subProcess.stdin.write('cd ./jzvue \n');
subProcess.stdin.write('pwd \n');
subProcess.stdin.write('ls');
subProcess.stdin.end();
