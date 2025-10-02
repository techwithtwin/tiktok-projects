const slot = document.querySelector(".slot");

const users = [
  {
    name: "Nicholas Cage",
    age: 30,
    dp: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Ram Charan",
    age: 40,
    dp: "https://i.pravatar.cc/300?img=2",
  },
  {
    name: "Sai Dharam",
    age: 47,
    dp: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Varun Tej",
    age: 25,
    dp: "https://i.pravatar.cc/300?img=4",
  },
  {
    name: "Allu Arjun",
    age: 29,
    dp: "https://i.pravatar.cc/300?img=5",
  },
];

(function setupProfiles() {
  let profileData = "";

  users.forEach((user) => {
    profileData += `
        <div class="profile">
            <img
            width="50"
            src="${user.dp}"
            alt="Placeholder"
            />
            <div>
            <h4>${user.name}</h4>
            <p>${user.age} years</p>
            </div>
      </div>
        `;
  });

  slot.innerHTML = profileData;
})();
