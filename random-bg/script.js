const btn = document.querySelector("button");
const body = document.querySelector("body");
const show = document.querySelector(".show");

btn.addEventListener("click", handleClick);

function handleClick() {
  const r = generateRandom();
  const g = generateRandom();
  const b = generateRandom();
  const rgb = `rgb(${r},${g},${b})`;

  body.style.backgroundColor = rgb;
  show.textContent = rgb;
}

function generateRandom() {
  return Math.floor(Math.random() * 256);
}
