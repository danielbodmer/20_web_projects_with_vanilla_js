const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  formControl.className = 'form-control error';
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success';
}

// event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (username.value === '') {
    showError(username, 'Username is required.');
  } else {
    showSuccess(username);
  }
})