import axios from 'axios';

const App = (() => {

  function renderErrorMessage(messageText, parentNode) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('message', 'error-message');
    errorMessage.innerHTML = `<span class="fa fa-exclamation-circle fa-lg fa-fw"></span> ${messageText}`;

    document.querySelector(parentNode).appendChild(errorMessage);
  }

  function removeErrorMessage(parentNode) {
    const errorMessage = document.querySelector(`${parentNode} .error-message`);
    errorMessage ? document.querySelector(parentNode).removeChild(errorMessage) : null;
  }

  function renderMessages() {
    document.getElementById('msg-board-container').innerHTML = `
    <a class="button new-message" href="/new" target="_self"><span class="fas fa-plus"></span> New</a>
    <div class="msg-board"></div>`;

    axios.get('/api/messages').then(data => {
      document.querySelector('.msg-board').innerHTML = data.data.map(message => {
        return `<article class="msg-card">
          <div class="msg-card-header">
            <span class="username">${message.user}</span><span class="timestamp">${new Date(message.timestamp).toLocaleDateString()}</span>
          </div>
          <div class="msg">${message.message}</div>
        </article>`;
      }).join('');
    }).catch(() => {
      renderErrorMessage('Unable to load message board at this time.', '#msg-board-container');
    });
  }

  function renderNewMessageForm() {
    document.getElementById('new-message').innerHTML = `<form class="resize-form" method="POST" action="/new">
      <div class="form-group">
        <label for="user-input">User</label>
        <input type="text" name="user" id="user-input" required />
      </div>
      <div class="form-group">
        <label for="message-input">Message</label>
        <textarea name="message" rows="8" id="message-input" required></textarea>
      </div>
      <div class="button-group">
        <input type="submit" class="button submit" value="Post" />
        <a class="button cancel" href="/" target="_self">Cancel</a>
      </div>
    </form>`;
  }

  function validateNewMessageForm(event, userInput, messageInput) {

    if (!userInput || !messageInput) {
      event.preventDefault();
      renderErrorMessage('A username and message are required to post to the message board.', '#new-message');
      return false;
    }
    else {
      removeErrorMessage('#new-message');
      return true;
    }
  }

  function renderApp(messages) {
    const messageBoardContainer = document.getElementById('msg-board-container');
    const newMessage = document.getElementById('new-message');

    messageBoardContainer ? renderMessages() : null;
    newMessage ? renderNewMessageForm() : null;

    document.addEventListener('submit', event => {
       const element = event.target;
       element.matches('.resize-form') ? validateNewMessageForm(event, document.getElementById('user-input').value, document.getElementById('message-input').value) : null;
    });
  }

  return {
    renderApp
  };
})();

export { App };
