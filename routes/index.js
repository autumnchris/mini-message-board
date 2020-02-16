const express = require('express');
const router = express.Router();
const dummyData = [
  {
    username: 'C-3PO',
    message: 'We\'re doomed!',
    timestamp: new Date().toLocaleString()
  },
  {
    username: 'Obi-Wan Kenobi',
    message: 'Hello there!',
    timestamp: new Date().toLocaleString()
  },
  {
    username: 'Leia Organa',
    message: 'Help me, Obi-Wan Kenobi. You\'re my only hope.',
    timestamp: new Date().toLocaleString()
  }
];

router.get('/', (req, res, next) => {
  res.render('index', {title: '', messages: dummyData});
});

module.exports = router;
