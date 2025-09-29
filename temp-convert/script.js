const celsiusInput = document.querySelector("#celsius");
const kelvinInput = document.querySelector("#kelvin");
const fahrenheitInput = document.querySelector("#fahrenheit");

celsiusInput.addEventListener("input", () =>
  processData(celsiusInput.value, "celsius"),
);
kelvinInput.addEventListener("input", () =>
  processData(kelvinInput.value, "kelvin"),
);
fahrenheitInput.addEventListener("input", () =>
  processData(fahrenheitInput.value, "fahrenheit"),
);

function processData(value, type) {
  if (!value) {
    resetInputs();
    return;
  }

  let numValue = Number(value);

  switch (type) {
    case "celsius": {
      const kelvin = toKelvin(numValue, type);
      const fah = toFahrenheit(numValue, type);

      fahrenheitInput.value = fah;
      kelvinInput.value = kelvin;
      break;
    }
    case "kelvin": {
      const celsius = toCelsius(numValue, type);
      const fah = toFahrenheit(numValue, type);

      celsiusInput.value = celsius;
      fahrenheitInput.value = fah;
      break;
    }
    case "fahrenheit": {
      const celsius = toCelsius(numValue, type);
      const kelvin = toKelvin(numValue, type);

      celsiusInput.value = celsius;
      kelvinInput.value = kelvin;
      break;
    }
  }
}

function toFahrenheit(value, type) {
  // type can be either kelvin or celsius
  let fah;

  if (type === "kelvin") {
    fah = (value - 253) * (9 / 5) + 32;
  } else {
    fah = value * (9 / 5) + 32;
  }

  return fah;
}

function toKelvin(value, type) {
  // type can be fahrenheit or celsius
  let kelvin;

  if (type === "celsius") {
    kelvin = value + 273.15;
  } else {
    kelvin = (value - 32) * (5 / 9) + 273.15;
  }

  return kelvin;
}

function toCelsius(value, type) {
  // type can be fahrenheit or kelvin
  let cels;

  if (type === "kelvin") {
    cels = value - 273.15;
  } else {
    cels = (value - 32) * (5 / 9);
  }

  return cels;
}

function resetInputs() {
  kelvinInput.value = "";
  celsiusInput.value = "";
  fahrenheitInput.value = "";
}
