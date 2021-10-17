const [input, create, destroy] = document.getElementById("controls").children;
const container = document.getElementById("boxes");
let size = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

create.addEventListener("click", () => {
  createBoxes(input.value);
});

destroy.addEventListener("click", () => {
  container.innerHTML = "";
  size = 30;
});

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10;
  }
  container.append(...elements);
}
