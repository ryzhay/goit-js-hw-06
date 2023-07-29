// const categoriesUl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesUl.length}`);

// // const title = document.querySelector("h2").textContent

// const categoriesList = document.querySelectorAll(".item ul");

// categoriesUl.forEach((element) => {
//   const title = element.firstElementChild.textContent;
  

//   console.log(`Category: ${title}`); 
// console.log(`Elements: ${element.children.length}`);
   
// });


const categoryEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoryEl.children.length}`);

[...categoryEl.children].forEach((item) => {

const categoryTitle = item.querySelector("h2");
const categoryItem = item.querySelectorAll("li");

console.log(`Category: ${categoryTitle.textContent}`);
console.log(`Elements: ${categoryItem.length}`);

});

