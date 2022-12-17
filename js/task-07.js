const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', event => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});

// //___________variant 2__________________________
// inputEl.addEventListener('input', event => {
//   textEl.style.fontSize = event.currentTarget.value + 'px';
// });
