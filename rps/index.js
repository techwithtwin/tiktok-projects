const actions = document.querySelector(".actions");
const children = actions.children;

const choices = ["rock", "scissors", "paper"];

Array.from(children).forEach((child) => {
  child.addEventListener("click", handleClick);
});

function handleClick(e) {
  const userPick = e.target.id;
  const { winner, computerPick } = calculateResult(userPick);

  const generateResponse = () => {
    if (winner === "tie") return { message: "It is A Tie", color: "blue" };
    if (winner === "user") return { message: "You Won!", color: "green" };
    return { message: "Computer Won", color: "red" };
  };

  // update the DOM
  document.querySelector(
    ".user-pick",
  ).textContent = `You Picked: ${userPick.toUpperCase()}`;

  document.querySelector(
    ".computer-pick",
  ).textContent = `Computer Picked: ${computerPick.toUpperCase()}`;

  document.querySelector(".display-heading").textContent =
    generateResponse().message;

  document.querySelector(".card").style.borderColor = generateResponse().color;
}

function calculateResult(userPick) {
  const computerPick = choices[getRandomFromZeroToTwo()];
  let winner;

  switch (computerPick) {
    case "rock": {
      if (userPick === "rock") {
        winner = "tie";
      } else if (userPick === "paper") {
        winner = "user";
      } else {
        winner = "computer";
      }
      break;
    }
    case "paper": {
      if (userPick === "rock") {
        winner = "computer";
      } else if (userPick === "paper") {
        winner = "tie";
      } else {
        winner = "user";
      }

      break;
    }
    case "scissors": {
      if (userPick === "rock") {
        winner = "user";
      } else if (userPick === "paper") {
        winner = "computer";
      } else {
        winner = "tiel";
      }
      break;
    }
  }

  return { winner, computerPick };
}

function getRandomFromZeroToTwo() {
  return Math.floor(Math.random() * 3);
}
