const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/common');
});

router.get('/favicon.ico', (req, res) => {
  res.redirect('/common/favicon.ico');
});


module.exports = router;
