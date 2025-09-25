const hamburgerIcon = document.querySelector(".fa-bars");
const verticalItems = document.querySelector(".vertical-items");

hamburgerIcon.addEventListener("click", showNavItems);

function showNavItems() {
  hamburgerIcon.classList.toggle("active");
  verticalItems.classList.toggle("active");
}
