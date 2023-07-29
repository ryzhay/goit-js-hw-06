const inputEl = document.getElementById('validation-input');
const inputLength = inputEl.dataset.length;

inputEl.addEventListener('blur', getBorderColor);

function getBorderColor(event) {
    console.log(inputEl.value.length);
    if (event.currentTarget.value.length === Number(inputLength)) { 
      inputEl.classList.remove('invalid');
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.remove('valid');
      inputEl.classList.add('invalid');
    }
  };