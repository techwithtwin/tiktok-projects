const btn = document.querySelector("button");
const jokeParagraph = document.querySelector(".joke");
const spinner = document.querySelector(".loader");

btn.addEventListener("click", getRandomJoke);

async function getRandomJoke() {
  spinner.style.display = "block";
  const joke = await fetchJoke();
  spinner.style.display = "none";

  if (!joke) {
    alert("Failed to fetch");
    return;
  }

  jokeParagraph.textContent = joke;
}

async function fetchJoke() {
  try {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok)
      throw new Error(`Failed to Fetch, with status code ${res.status}`);

    const data = await res.json();

    if (!data.joke)
      throw new Error(
        "Invalid Response, exited with status code " + res.status,
      );
    return data.joke;
  } catch (error) {
    console.log(error);
    return null;
  }
}
