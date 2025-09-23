const decreaseBtn = document.querySelector(".decrease-btn");
const increaseBtn = document.querySelector(".increase-btn");
const resetBtn = document.querySelector(".reset-btn");
const numDisplay = document.querySelector(".num-display");

decreaseBtn.addEventListener("click", () => handleClick("decrease"));
increaseBtn.addEventListener("click", () => handleClick("increase"));
resetBtn.addEventListener("click", () => handleClick("reset"));

function handleClick(type) {
  const existingValue = numDisplay.textContent;

  switch (type) {
    case "decrease": {
      numDisplay.textContent = Number(existingValue) - 1;
      break;
    }
    case "increase": {
      numDisplay.textContent = Number(existingValue) + 1;
      break;
    }
    default: {
      numDisplay.textContent = 0;
    }
  }
}
