const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onBlur);

function onBlur(evt) {
  const inputDataLength = Number(inputRef.dataset.length);
  const inputEnteredLength = Number(evt.currentTarget.value.trim().length);
  console.log(inputDataLength);
  if (inputEnteredLength === inputDataLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
