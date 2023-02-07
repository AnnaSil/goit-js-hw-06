
const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

const categories = items.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
})