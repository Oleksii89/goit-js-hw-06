const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const counterValueRef = document.querySelector("#value");

let counterValue = 0;

decrementBtnRef.addEventListener("click", onClickDecrement);

function onClickDecrement(evt) {
  counterValueRef.textContent = counterValue -= 1;
}

incrementBtnRef.addEventListener("click", onClickIncrement);

function onClickIncrement(evt) {
  counterValueRef.textContent = counterValue += 1;
}
