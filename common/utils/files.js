const fs = require('fs');
const path = require('path');

function copyAllFile(originPath, targetPath) {
  let isFileFlag = false;
  try {
    isFileFlag = fs.statSync(originPath).isFile() ? true : false;
  }catch(e) {
    console.log('原始文件路径有误:' + originPath, e);
    return;
  }
  if(!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
  }
  if(isFileFlag) {
    let index = originPath.lastIndexOf('\\');
    let fileName = originPath.slice(index);
    fs.copyFileSync(originPath, path.join(targetPath, fileName));
    return;
  }
  let files = fs.readdirSync(originPath);
  files.forEach((item, index) => {
    let origin_path = path.join(originPath, item);
    let targe_path = path.join(targetPath, item);
    let temp = fs.statSync(origin_path);
    if(temp.isFile()) {
      fs.copyFileSync(origin_path, targe_path);
    }else if(temp.isDirectory()) {
      copyAllFile(origin_path, targe_path);
    }
  })
}

function deleteAllFile(originPath, pramas) {
  let isFileFlag = false;
  let { exclude = {} } = pramas;
  try {
    isFileFlag = fs.statSync(originPath).isFile() ? true : false;
  }catch(e) {
    console.log('路径不存在:' + originPath, e);
    return;
  }
  if(isFileFlag) {
    let index = originPath.lastIndexOf('\\');
    let fileName = originPath.slice(index + 1);
    console.log(index, fileName);
    console.log(exclude.files.indexOf(fileName));
    if(exclude.files && exclude.files.indexOf(fileName) > -1) {}else {
      fs.unlinkSync(originPath);
    }
    return;
  }
  let files = fs.readdirSync(originPath);
  files.forEach((item, index) => {
    let origin_path = path.join(originPath, item);
    let temp = fs.statSync(origin_path);
    if(temp.isFile()) {
      if(exclude.files && exclude.files.indexOf(item) > -1) {}else {
        fs.unlinkSync(origin_path);
      }
    }else if(temp.isDirectory()) {
      deleteAllFile(origin_path, pramas);
    }
  })
  let isDeleteDirFlag = true;
  exclude.dirs && exclude.dirs.forEach((item, index) => {
    if(originPath.indexOf(item) > -1) isDeleteDirFlag = false;
  })
  try {
    if(isDeleteDirFlag) fs.rmdirSync(originPath);
  }catch(e) {}
}

module.exports = {
  copyAllFile,
  deleteAllFile
}