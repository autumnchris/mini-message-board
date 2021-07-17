const messagesData = require('../messages-data');

exports.getMessages = (req, res, next) => {
  res.json(messagesData);
}
