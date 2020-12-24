const fs = require('fs');
const path = require('path');

const staticPath = path.resolve(__dirname, 'static');
const targetPath = path.resolve(__dirname, 'view');

fs.readdir(staticPath, (err, files) => {
  console.log('files', files);
  if(!fs.existsSync(targetPath)) {
    console.log('没有view文件夹');
    fs.mkdirSync('../view');
  }else {
    files.forEach((item, index) => {
      let item_path = path.join(staticPath, item);
      let temp = fs.statSync(item_path);
      if(temp.isFile()) {
        fs.copyFileSync(item_path, targetPath);
      }else if(temp.isDirectory()) {
        // CopyDirectory(item_path, targetPath);
      }
    })
  }
});