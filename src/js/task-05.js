const textInput = document.querySelector("#name-input");
console.log(textInput);

const textOutput = document.querySelector("#name-output");
console.dir(textOutput);

textInput.addEventListener("input", (evt) => {
  textOutput.textContent = evt.currentTarget.value;
});
