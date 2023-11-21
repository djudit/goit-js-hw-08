// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

textarea.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
input.addEventListener('input', handleEmail);

saveTextarea();

const objStorage = {};
console.log(objStorage);

function handleEmail(event) {
  const inputEmail = event.target.value;
  objStorage.email = inputEmail;
  //   localStorage.setItem('feedback-form-state', inputEmail);
}

function handleInput(event) {
  const message = event.target.value;
  objStorage.message = message;
  //   localStorage.setItem('feedback-form-state', message);
}

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function saveTextarea() {
  const savedObj = localStorage.getItem('feedback-form-state');
  const savedMessage = JSON.parse(savedObj);
  if (savedObj) {
    textarea.value = savedMessage.message;
  }
}

const storage = localStorage.setItem(
  'feedback-form-state',
  JSON.stringify(objStorage)
);
console.log(storage);
