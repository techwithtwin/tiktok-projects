const items = [
  {
    thumb: "11.png",
    title: "Christmas Tree Decoration",
    price: 19.99,
    discount: 0,
    createdAt: new Date("2025-12-07"),
  },
  {
    thumb: "12.png",
    title: "Mystery Gift",
    price: 10.0,
    discount: 2.99,
    createdAt: new Date("2025-12-01"),
  },
  {
    thumb: "1.png",
    title: "Gingerbread Man Cookie",
    price: 12.99,
    discount: 0,
    createdAt: new Date("2025-12-01"),
  },
  {
    thumb: "2.png",
    title: "Snowflake Decoration",
    price: 4.99,
    discount: 0,
    createdAt: new Date("2025-12-01"),
  },
  {
    thumb: "3.png",
    title: "Star Shaped Cookie",
    price: 12.99,
    discount: 0,
    createdAt: new Date("2025-12-01"),
  },
  {
    thumb: "4.png",
    title: "Santa Hat",
    price: 26.39,
    discount: 3.6,
    createdAt: new Date("2025-12-01"),
  },
  {
    thumb: "5.png",
    title: "Candy Cane",
    price: 9.99,
    discount: 0,
    createdAt: new Date("2025-12-01"),
  },
  {
    thumb: "6.png",
    title: "Snowman Decoration",
    price: 39.99,
    discount: 0,
    createdAt: new Date("2025-12-01"),
  },
  {
    thumb: "7.png",
    title: "Christmas Ball",
    price: 4.99,
    discount: 0,
    createdAt: new Date("2025-12-07"),
  },
  {
    thumb: "8.png",
    title: "Christmas Sock",
    price: 25.49,
    discount: 4.5,
    createdAt: new Date("2025-12-01"),
  },
  {
    thumb: "9.png",
    title: "Red Ribbon",
    price: 3.99,
    discount: 0,
    createdAt: new Date("2025-12-07"),
  },
  {
    thumb: "10.png",
    title: "Tree Cookie",
    price: 13.99,
    discount: 0,
    createdAt: new Date("2025-12-01"),
  },
];

(function init() {
  const wrapper = document.querySelector("main");

  wrapper.innerHTML = generateHtml();
})();

function generateHtml() {
  let content = "";

  items.forEach((item) => {
    content += `
     <div class="card">
        <div class="img-wrapper">
          <img src="./assets/${item.thumb}" alt="" />
          <div class="add-to-cart">
            <p>Add to Cart</p>
          </div>
          ${
            item.discount
              ? `
                <div class='badge danger'>
                  <p>${
                    "- " +
                    ((item.discount / item.price) * 100).toFixed(2) +
                    " %"
                  }</p>
                </div>
              `
              : isItemNew(item.createdAt)
              ? `
                <div class='badge'>
                <p>NEW</p>
                </div>
              `
              : ""
          }
         
        </div>
        <div class="card__content">
          <h3>${item.title}</h3>
          <p class="price">$${item.price} 
          ${item.discount ? "<sup>$12.99</sup>" : ""} </p>
        </div>
      </div>
    `;
  });

  return content;
}

function isItemNew(itemDate) {
  const diffInDays = Math.ceil((new Date() - itemDate) / (24 * 60 * 60 * 1000));

  return diffInDays > 4 ? false : true;
}
