const { exec, execSync, spawn, spawnSync, execFile, execFileSync } = require('child_process');
const iconv = require('iconv-lite');
const isWin32 = process.platform === 'win32';

const commandline = {
  exec,
  execSync,
  spawn,
  spawnSync,
  execFile,
  execFileSync,
  execPromise,
  spawnPromise,
  bashCommand
};

function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, function(err, stdout, stderr) {
      if(err) {
        console.log('err', iconv.decode(stderr, 'GB2312'));
      }else {
        resolve(iconv.decode(stdout, 'GB2312'));
      }
    });
  })
}

function spawnPromise(command, arr = []) {
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

function bashCommand() {
  if(isWin32) {
    console.log('该命令不能在windows上执行');
    return;
  }
  const subProcess = spawn('bash');
  function onData(data) {
    process.stdout.write(iconv.decode(data, 'GB2312'));
  }
  subProcess.stdout.on('data', onData);
  subProcess.stderr.on('data', onData);
  subProcess.on('close', code => {
    console.log('子进程退出码: ', code);
  })
  subProcess.on('error', code => {
    console.log('错误码error', code);
  })
  return subProcess;
}

module.exports = commandline;
