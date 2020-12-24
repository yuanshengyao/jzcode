# jzvue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### 2020-12-24
+ 使用vue-cli脚手架搭建的vue2项目
+ webpack修改项：
+ dev环境端口修改为3000
+ prod环境打包后会出现引用不到static文件的情况
> 修改一下config下面的index.js中bulid模块导出的路径,assetsPublicPath默认的是  ‘/’
+ 也就是根目录而我们的index.html和static在同一级目录下面。  所以要改为  ‘./ ’
