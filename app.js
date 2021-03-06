const express = require('express');
const path = require('path');
const routers = require('./server/routers/index');
const redirect = require('./server/middlewares/redirect');
const config = require('./server/server.conf');

const app = express();

app.use(redirect);

Object.keys(routers || {}).forEach(key => {
  routers[key](app);
})

app.use(express.static(path.join(__dirname, 'view')));
app.use(express.static(path.join(__dirname, 'jzvue/dist')));
app.use(function(req, res, next) {
  res.status(404).send('Server returned : 404 Not Found');
});

module.exports = app;
