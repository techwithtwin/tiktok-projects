const testimonials = [
  {
    id: 1,
    authorImage: "./imgs/1.jpeg",
    authorName: "TWT",
    authorTitle: "Software Dev",
    isActive: true,
    content:
      "TechWithTwin has made learning so much easier for me. The tutorials are clear, practical, and straight to the point. Truly a gem!",
  },
  {
    id: 2,
    authorImage: "./imgs/2.jpg",
    authorName: "John Doe",
    authorTitle: "Technical Writer",
    isActive: false,
    content:
      "I came across TechWithTwin by chance, and it has been one of the best finds. The guidance and breakdowns are just what I needed",
  },
  {
    id: 3,
    authorImage: "./imgs/3.jpg",
    authorName: "Miss Riz",
    authorTitle: "CEO",
    isActive: false,
    content:
      "Every tutorial feels like it was made exactly for me. TechWithTwin explains things in a way that finally makes sense. Highly recommended!",
  },
  {
    id: 4,
    authorImage: "./imgs/4.jpg",
    authorName: "Brian Tuh",
    authorTitle: "Student",
    isActive: false,
    content:
      "I've tried many resources, but none compare to TechWithTwin. The content is not only helpful but also motivating to keep learning",
  },
];
const leftAngle = document.querySelector(".left-angle");
const rightAngle = document.querySelector(".right-angle");
const slot = document.querySelector(".slot");

// load the first card
(function init() {
  const initial = testimonials[0];
  slot.innerHTML = populateCardData(
    initial.content,
    initial.authorImage,
    initial.authorName,
    initial.authorTitle,
  );
})();

leftAngle.addEventListener("click", () => handleClick("left"));
rightAngle.addEventListener("click", () => handleClick("right"));

function handleClick(type) {
  const currentIndex = testimonials.findIndex((item) => item.isActive);
  const arrLength = testimonials.length;
  let newIndex;

  if (type === "left") {
    if (currentIndex === 0) {
      newIndex = arrLength - 1;
    } else {
      newIndex = currentIndex - 1;
    }
  } else {
    if (currentIndex === arrLength - 1) {
      newIndex = 0;
    } else {
      newIndex = currentIndex + 1;
    }
  }
  // change the is Active element;
  testimonials.forEach((item, idx) => {
    if (idx === newIndex) {
      item.isActive = true;
    } else {
      if (item.isActive) {
        item.isActive = false;
      }
    }
  });
  const newItem = testimonials[newIndex];
  slot.innerHTML = populateCardData(
    newItem.content,
    newItem.authorImage,
    newItem.authorName,
    newItem.authorTitle,
  );
}

function populateCardData(content, authorImage, authorName, authorTitle) {
  return `
            <div class="card">
          <p class="testimony">
            ${content}
          </p>
          <hr />
          <div class="bottom-section">
            <div class="profile">
              <img
                src="${authorImage}"
                width="50"
                height="50"
                alt="${authorName}'s avatar"
              />
              <div class="user-data">
                <h4>${authorName}</h4>
                <p>${authorTitle}</p>
              </div>
            </div>
            <div class="rating">
              <img src="./icons/star.svg" width="15" height="15" alt="star" />
              <img src="./icons/star.svg" width="15" height="15" alt="star" />
              <img src="./icons/star.svg" width="15" height="15" alt="star" />
              <img src="./icons/star.svg" width="15" height="15" alt="star" />
              <img src="./icons/star.svg" width="15" height="15" alt="star" />
            </div>
          </div>
        </div>
    `;
}

// Exercise: Make ratings dynamic
