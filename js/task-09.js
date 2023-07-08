function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");

const textOutput = document.querySelector(".color");

const bodyRef = document.querySelector("body");

btnChangeColor.addEventListener("click", onClick);

function onClick() {
  bodyRef.style.backgroundColor = textOutput.textContent = getRandomHexColor();
}
