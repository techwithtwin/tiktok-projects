// 1 kg = 2.205 pounds

const weightInput = document.querySelector("input");
const errorDisplay = document.querySelector(".error-display");
const resultDisplay = document.querySelector(".display-span");

weightInput.addEventListener("input", handleInputChange);

function handleInputChange(e) {
  const weight = e.target.value;

  if (weight === "" || isNaN(weight)) {
    errorDisplay.textContent = "Invalid weight!";

    if (resultDisplay !== "") {
      resultDisplay.textContent = "";
    }
    return;
  } else {
    if (errorDisplay !== "") {
      errorDisplay.textContent = "";
    }
    const weightInKg = (Number(weight) / 2.205).toFixed(4);

    resultDisplay.textContent = weightInKg;
  }
}
