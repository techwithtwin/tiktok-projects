const form = document.querySelector("form");
const result = document.querySelector(".result");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const data = new FormData(e.target);
  const birthDateStr = data.get("birth-date");

  const birthDate = new Date(birthDateStr);
  const today = new Date();

  if (birthDate > today) {
    alert("Birth Date can't be in future!");
    return;
  }

  // year difference
  let age = today.getFullYear() - birthDate.getFullYear();

  // lets check if the birthday has occurred.
  const isMonthAhead = today.getMonth() > birthDate.getMonth();
  const isCurrentMonth = today.getMonth() === birthDate.getMonth();
  const isTodayAhead = today.getDate() > birthDate.getDate();

  const hasBirthdayOccurred = isMonthAhead || isCurrentMonth || isTodayAhead;

  if (!hasBirthdayOccurred) {
    age--;
  }

  result.textContent = `You are ${age} year(s) old!`;
}
