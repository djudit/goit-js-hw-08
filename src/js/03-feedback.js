import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

let objStorage = {};

saveTextarea();

function handleInput(event) {
  objStorage[event.target.name] = event.target.value;
  const storage = localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(objStorage)
  );
}

function handleSubmit(event) {
  console.log(objStorage);
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function saveTextarea() {
  const savedObj = localStorage.getItem('feedback-form-state');
  const savedInput = JSON.parse(savedObj);
  if (savedObj) {
    input.value = savedInput.email;
    textarea.value = savedInput.message;
    // console.log(savedInput);
  }
}
