const { exec, execSync, spawn, spawnSync, execFile, execFileSync } = require('child_process');

const commandline = {
  exec,
  execSync,
  spawn,
  spawnSync,
  execFile,
  execFileSync,
  nodeCommand
};

function nodeCommand(command, arr) {
  const commandObj = spawn(command, arr);
  commandObj.stdout.on('data', data => {
    console.log(command + ' ' + 'stdout', data.toString('utf-8'));
  })
  commandObj.stderr.on('data', data => {
    console.log(command + ' ' + 'stderr', data.toString('utf-8'));
  })
  commandObj.on('close', code => {
    console.log(command + ' ' + 'exit', code);
  })
  commandObj.on('error', code => {
    console.log(command + ' ' + 'error', code);
  })
}

module.exports = commandline;
