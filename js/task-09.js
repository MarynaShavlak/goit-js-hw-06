const bodyEl = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorNameEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', onchangeColorBtnClick);

function onchangeColorBtnClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
