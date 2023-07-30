
const categoryEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoryEl.children.length}`);

[...categoryEl.children].forEach((item) => {

const categoryTitle = item.firstElementChild;
const categoryItem = categoryTitle.nextElementSibling.children;

console.log(`Category: ${categoryTitle.textContent}`);
console.log(`Elements: ${categoryItem.length}`);

});

