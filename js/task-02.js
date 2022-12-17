const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientElements = ingredients.map(ingredient => {
  const ingredienEl = document.createElement('li');
  ingredienEl.textContent = ingredient;
  ingredienEl.classList.add('item');
  return ingredienEl;
});

ingredientsListEl.append(...ingredientElements);
