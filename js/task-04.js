let counterValue = 0;

const [decrement, value, increment] =
  document.querySelector("#counter").children;

decrement.addEventListener("click", () => {
  value.textContent = counterValue -= 1;
});

increment.addEventListener("click", () => {
  value.textContent = counterValue += 1;
});
