const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

textarea.addEventListener("input", handleChange);

function handleChange(e) {
  const value = e.target.value;

  const charLength = value.split("").length;

  count.textContent = charLength;
}
