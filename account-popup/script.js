const account = document.querySelector(".account");
const popup = document.querySelector(".details");

account.addEventListener("click", () => {
  popup.classList.toggle("hidden");
});
