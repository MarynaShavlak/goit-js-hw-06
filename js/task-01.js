const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

categories.forEach(category => {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.children.length);
});

// _______________VARIANT 2________________________
// const categories = document.querySelectorAll('.item');

// console.log('Number of categories:', categories.length);

// categories.forEach(category => {
//   const title = category.querySelector('h2');
//   const elementsInCategory = category.querySelectorAll('li');

//   console.log('Category:', title.textContent);
//   console.log('Elements:', elementsInCategory.length);
// });

// //_______________VARIANT 3________________________//
// const categoriesList = document.querySelector('#categories');
// const categories = categoriesList.children;
// console.log('Number of categories:', categories.length);

// Array.from(categories).forEach(category => {
//   const title = category.querySelector('h2');
//   const elementsInCategory = category.querySelectorAll('li');
//   console.log('Category:', title.textContent);
//   console.log('Elements:', elementsInCategory.length);
// });

// //_______________VARIANT 4________________________//
// const categoriesList = document.querySelector('#categories');
// const categories = categoriesList.children;
// console.log('Number of categories:', categories.length);

// [...categories].forEach(category => {
//   const title = category.querySelector('h2');
//   const elementsInCategory = category.querySelectorAll('li');
//   console.log('Category:', title.textContent);
//   console.log('Elements:', elementsInCategory.length);
// });
