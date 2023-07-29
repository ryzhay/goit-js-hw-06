const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');

const listEl = ingredients.map(item => {

  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = item;

  return liEl;
  

 });  

ulEl.append(...listEl);