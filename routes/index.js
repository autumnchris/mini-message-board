const express = require('express');
const router = express.Router();
const dummyData = [
  {
    user: 'C-3PO',
    message: 'We\'re doomed!',
    timestamp: new Date().toLocaleString()
  },
  {
    user: 'Obi-Wan Kenobi',
    message: 'Hello there!',
    timestamp: new Date().toLocaleString()
  },
  {
    user: 'Leia Organa',
    message: 'Help me, Obi-Wan Kenobi. You\'re my only hope.',
    timestamp: new Date().toLocaleString()
  }
];

router.get('/', (req, res, next) => {
  res.render('index', {messages: dummyData});
});

router.get('/new', (req, res, next) => {
  res.render('form', {title: 'Add a New Message'});
});

module.exports = router;
