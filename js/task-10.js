const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(inputEl.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let boxes = ``;
  for (let i = 0; i < amount; i += 1) {
    let box = `<div style="background-color: ${getRandomHexColor()}; width:${
      30 + i * 10
    }px; height: ${30 + i * 10}px "></div>`;
    boxes += box;
  }
  boxesEl.innerHTML = boxes;
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
