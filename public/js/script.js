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
