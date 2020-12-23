let fs = require('fs');
const { Router } = require('express');
const router = Router();

module.exports = function(app){
  app.use('/api', router);
}

router.post('/getAllDir', (request, response, next) => {
  let postData = Buffer.from([]);
  request.on('data', chunk => {
    postData = Buffer.concat([postData, chunk]);
  });
  request.on('end', () => {
    let data = Buffer.from([]);
    if(postData.length != 0) {
      let dirName = postData.toString();
      response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Content-Encoding'
      })
      try{
        // 读取目录信息
        data = fs.readdirSync(dirName);
        // 判断是否是文件,文件夹folder
        let resObj = { file: [], folder: []};
        for(let i = 0; i < data.length; i ++) {
          let stats;
          stats = fs.statSync(dirName + '/' + data[i]);
          if(stats.isDirectory()) {
            resObj.folder.push(data[i]);
          }else {
            resObj.file.push(data[i]);
          }
        }
        response.write(JSON.stringify(resObj));
        response.end();
      }catch(e) {
        response.write('fileDir error');
        response.end();
      }
    }else {
      response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Content-Encoding'
      })
      response.end('');
    }
  });
});
