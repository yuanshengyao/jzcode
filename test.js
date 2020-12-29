const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const { exec, execSync, spawn, spawnSync, execFile, execFileSync } = require('child_process');
const nodeCmd = require('./common/utils/nodecmd');

const staticPath = path.resolve(__dirname, 'common/dist/index.html');
const targetPath = path.resolve(__dirname, 'view');


const jzvueBuild = () => {
  return nodeCmd.execPromise('cd ./jzvue & node app.js');
}

jzvueBuild().then((data) => {
  console.log(data)
})