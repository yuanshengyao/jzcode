const { exec, execSync, spawn, spawnSync, execFile, execFileSync } = require('child_process');
const iconv = require('iconv-lite');

const commandline = {
  exec,
  execSync,
  spawn,
  spawnSync,
  execFile,
  execFileSync,
  execPromise,
  spawnCommand
};

function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, function(err, stdout, stderr) {
      if(err) {
        console.log(iconv.decode(stderr, 'GB2312'));
      }else {
        resolve(iconv.decode(stdout, 'GB2312'));
      }
    });
  })
}

function spawnCommand(command, arr = []) {
  return new Promise((resolve, reject) => {
    const commandObj = spawn(command, arr);
    commandObj.stdout.on('data', data => {
      const result = iconv.decode(data, 'GB2312');
      console.log(result);
      resolve('');
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
  });
}

module.exports = commandline;
