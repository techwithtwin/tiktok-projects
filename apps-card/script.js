const apps = [
  {
    logo: "./assets/dropbox.svg",
    name: "Dropbox",
  },
  {
    logo: "./assets/github.svg",
    name: "Github",
  },
  {
    logo: "./assets/jira.svg",
    name: "Jira",
  },
  {
    logo: "./assets/slack.svg",
    name: "Slack",
  },
  {
    logo: "./assets/teams.svg",
    name: "Teams",
  },
  {
    logo: "./assets/trello.svg",
    name: "Trello",
  },
];

(function init() {
  let htmlData = "";
  const container = document.querySelector(".apps");

  apps.forEach((app) => {
    htmlData += `
     <div class="app">
          <img width="100" src="${app.logo}" alt="" />
          <h3>${app.name}</h3>
          <button>
            <img width="24" src="./assets/plus.svg" alt="" />
            <p>Add</p>
          </button>
        </div>
    `;
  });
  container.innerHTML = htmlData;
})();
