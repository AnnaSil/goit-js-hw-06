const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');
const listItems = []


for (const ingredient of ingredients) {
  const liElem = document.createElement('li'); 
  liElem.textContent = ingredient;
  liElem.classList.add('item');
  listItems.push(liElem);
}


list.append(...listItems);

