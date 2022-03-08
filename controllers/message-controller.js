const messagesData = [
  {
    user: 'C-3PO',
    message: 'We\'re doomed!',
    date: new Date()
  },
  {
    user: 'Obi-Wan Kenobi',
    message: 'Hello there!',
    date: new Date()
  },
  {
    user: 'Leia Organa',
    message: 'Help me, Obi-Wan Kenobi. You\'re my only hope.',
    date: new Date()
  }
];

exports.fetchHomepage = (req, res, next) => {
  res.render('index', { messagesData });
}

exports.fetchNewMessageForm = (req, res, next) => {
  res.render('form', { title: 'Add a New Message' });
}

exports.createNewMessage = (req, res, next) => {
  const newMessage = {
    user: req.body.user.trim(),
    message: req.body.message.trim(),
    date: new Date()
  };

  function validateForm(formData) {

    if (!formData.user || !formData.message) {
      return 'A username and message are required to post to the message board.';
    }
    else {
      return null;
    }
  }

  if (validateForm(newMessage)) {
    res.render('form', { title: 'Add a New Message', data: newMessage, errorMessage: validateForm(newMessage) })
  }
  else {
    messagesData.push(newMessage);
    res.redirect('/');
  }
}
