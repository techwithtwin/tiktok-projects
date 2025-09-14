const btn = document.querySelector(".update-btn");
const content = document.querySelector(".modal-content");

btn.addEventListener("click", showModal);

function showModal() {
  if (content.classList.contains("show")) {
    content.classList.remove("show");
  } else {
    content.classList.add("show");
  }
}
