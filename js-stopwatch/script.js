const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const timer = document.querySelector(".timer");

let intervalId;
let startTime;

startBtn.addEventListener("click", () => handleClick("start"));
stopBtn.addEventListener("click", () => handleClick("stop"));
resetBtn.addEventListener("click", () => handleClick("reset"));

function handleClick(type) {
  if (type === "start") {
    if (intervalId) {
      return;
    }
    startTime = new Date();

    intervalId = setInterval(() => {
      const diff = new Date() - startTime;

      const hrs = Math.floor(diff / 3_600_000);
      const minutes = Math.floor((diff % 3_600_000) / 60_000);
      const seconds = Math.floor(((diff % 3_600_000) % 60_000) / 1000);

      timer.textContent = `${addPadStart(hrs)}:${addPadStart(
        minutes,
      )}:${addPadStart(seconds)}`;
    }, 10);

    return;
  }

  if (type === "stop") {
    if (!intervalId) return;
    clearInterval(intervalId);
    return;
  }

  if ((type = "reset")) {
    timer.textContent = "00:00:00";
    return;
  }
}

function addPadStart(value) {
  return String(value).padStart(2, "0");
}
