import cipher from './cipher.js';
const inputMsg = document.querySelector('#text-msg');
const offsetInput = document.querySelector('#offset');
const outputMsg = document.querySelector('#final-msg');
const switchBtn = document.querySelector('#switch-btn');
let btnStatus = true;
const resetBtn = document.querySelector('#reset-btn');

switchBtn.addEventListener('click', () => {
  btnStatus = !btnStatus;
});

inputMsg.oninput = () => {
  let result = '';
  if (btnStatus) {
    result = cipher.encode(offsetInput.value, inputMsg.value)
  } else {
    result = cipher.decode(offsetInput.value, inputMsg.value)
  }
  outputMsg.value = result;
}

resetBtn.addEventListener('click', () => {
  inputMsg.value = '';
  outputMsg.value = '';
});

