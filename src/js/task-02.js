const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = element;
  ingredient.classList.add("item");
  ingredientsRef.append(ingredient);
});
