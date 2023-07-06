const qtyOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${qtyOfCategories.length}`);

const categoryName = document.querySelectorAll("h2");
categoryName.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
