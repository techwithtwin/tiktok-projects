const pwdInput = document.querySelector("#password");
const eyeIcon = document.querySelector(".show-icon");

eyeIcon.addEventListener("click", toggleInput);

function toggleInput() {
  let currentType = pwdInput.getAttribute("type");

  if (currentType === "password") {
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
    pwdInput.setAttribute("type", "text");
  } else {
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
    pwdInput.setAttribute("type", "password");
  }
}
