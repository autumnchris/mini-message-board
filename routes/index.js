const express = require('express');
const messagesData = require('../messages-data');
const apiData = require('./api');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/new', (req, res, next) => {
  res.render('form', {title: 'Add a New Message'});
});

router.post('/new', (req, res, next) => {
  messagesData.push({
    user: req.body.user,
    message: req.body.message,
    timestamp: new Date().getTime()
  });
  res.redirect('/');
});

module.exports = router;
