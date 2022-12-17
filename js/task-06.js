const inputEl = document.querySelector('#validation-input');
const REQUIRED_LENGTH = Number(inputEl.getAttribute('data-length'));
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let quantityOfSymbols = event.currentTarget.value.trim().length;

  if (quantityOfSymbols === REQUIRED_LENGTH) {
    event.currentTarget.classList.toggle('valid');

    if (event.currentTarget.classList.contains('invalid')) {
      event.currentTarget.classList.remove('invalid');
    }
    return;
  }

  if (event.currentTarget.classList.contains('valid')) {
    event.currentTarget.classList.remove('valid');
  }
  event.currentTarget.classList.add('invalid');
}
