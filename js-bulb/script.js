const onBtn = document.querySelector("#on");
const offBtn = document.querySelector("#off");
const imgElement = document.querySelector("img");

onBtn.addEventListener("click", () => handleClick("on"));
offBtn.addEventListener("click", () => handleClick("off"));

function handleClick(action) {
  switch (action) {
    case "on": {
      imgElement.setAttribute("src", "./bulb-on.jpg");
      break;
    }
    case "off": {
      imgElement.setAttribute("src", "./bulb-off.jpg");
    }
  }
}
