const express = require('express');
const router = express.Router();
const dummyData = [
  {
    user: 'C-3PO',
    message: 'We\'re doomed!',
    timestamp: new Date().getTime()
  },
  {
    user: 'Obi-Wan Kenobi',
    message: 'Hello there!',
    timestamp: new Date().getTime()
  },
  {
    user: 'Leia Organa',
    message: 'Help me, Obi-Wan Kenobi. You\'re my only hope.',
    timestamp: new Date().getTime()
  }
];

router.get('/messages', (req, res, next) => {
  res.json(dummyData);
});

module.exports = {
  router,
  dummyData
};
