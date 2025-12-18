const toastContainer = document.querySelector(".toast-container");

function handleClose(e) {
  console.log(e);
  e.target.parentElement.remove();
}

function handleToast(type = "success") {
  const node = document.createElement("div");
  node.classList.add("toast");
  node.innerHTML = `
    <img width="40" src="${
      type === "success"
        ? "./assets/check-circle.svg"
        : "./assets/cancel-circle.svg"
    }" alt="" />
    <p>
        File has been ${type === "success" ? "added" : "removed"} successfully!
    </p>
    <img
        onclick="handleClose(event)"
        class="close-icon"
        width="30"
        src="./assets/cancel.svg"
        alt=""
    />
    `;
  toastContainer.appendChild(node);
}
