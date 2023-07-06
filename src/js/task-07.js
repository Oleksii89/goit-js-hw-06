//знайти інпут по id "font-size-control"
//знайти span по id "text"
//додати прослуховувача на інпут
//написати функцію onInput
// функція onInput повинна присвоювати значенню font-size тексту спан -
//  поточне значення evt.currentTarget.value + px але як строку

const inputScrollRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

inputScrollRef.addEventListener("input", onInput);

function onInput(evt) {
  textRef.style.fontSize = evt.currentTarget.value.concat("px");
}
