function getMessages() {
  axios.get('/api/messages').then(data => {
    document.querySelector('.msg-board').innerHTML = data.data.map(message => {
      return `<article class="msg-card">
        <div class="msg-card-header">
          <span class="username">${message.user}</span><span class="timestamp">${new Date(message.timestamp).toLocaleDateString()}</span>
        </div>
        <div class="msg">${message.message}</div>
      </article>`
    }).join('');
  }).catch(() => {
    document.querySelector('.msg-board').style.display = 'none';
    document.querySelector('.error-message').style.display = 'block';
  });
}

getMessages();
