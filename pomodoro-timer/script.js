const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const timer = document.querySelector(".timer");
const DEFAULT_TIME = 60 * 25;
let time = DEFAULT_TIME; // seconds
let intervalId;

startBtn.addEventListener("click", () => handleClick("start"));
stopBtn.addEventListener("click", () => handleClick("stop"));
resetBtn.addEventListener("click", () => handleClick("reset"));

function handleClick(type) {
  if (time === 0) {
    type = "stop";
  }
  switch (type) {
    case "start": {
      if (intervalId) return;

      intervalId = setInterval(() => {
        time--;

        updateTimer(time);
      }, 1000);

      break;
    }
    case "stop": {
      if (!intervalId) return;
      clearInterval(intervalId);
      intervalId = undefined;
      break;
    }
    case "reset": {
      time = DEFAULT_TIME;
      updateTimer(time);
      if (intervalId) {
        clearInterval(intervalId);
      }

      break;
    }
  }
}
function updateTimer(s) {
  let minutes = Math.floor(s / 60);
  let seconds = s % 60;
  timer.textContent = `${addPadStart(minutes)} : ${addPadStart(seconds)}`;
}
function addPadStart(value) {
  return String(value).padStart(2, "0");
}
