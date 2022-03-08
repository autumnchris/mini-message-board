const express = require('express');
const messageController = require('../controllers/message-controller');
const router = express.Router();

router.get('/', messageController.fetchHomepage);

router.get('/new', messageController.fetchNewMessageForm);

router.post('/new', messageController.createNewMessage);

module.exports = router;
