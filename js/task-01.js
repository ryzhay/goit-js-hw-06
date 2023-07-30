
const categoryEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoryEl.children.length}`);

[...categoryEl.children].forEach((item) => {

const categoryTitle = item.querySelector("h2");
const categoryItem = item.querySelectorAll("li");

console.log(`Category: ${categoryTitle.textContent}`);
console.log(`Elements: ${categoryItem.length}`);

});

