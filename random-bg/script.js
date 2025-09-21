const btn = document.querySelector("button");
const body = document.querySelector("body");
const show = document.querySelector(".show");

btn.addEventListener("click", handleClick);

function handleClick() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r},${g},${b})`;

  body.style.backgroundColor = rgb;
  show.textContent = rgb;
}
