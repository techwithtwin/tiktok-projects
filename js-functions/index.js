// JavaScript Functions
/*
A function is like a box that is used to organize some
group of related stuff( but in our case code )

You can only use a function when you execute it or call it
other than that it is just a useless box

The function can accept data which is are called parameters
and when you call the function you give it the data it requires
called arguments.

Using a greeting function
e.g 
*/
const heading = document.querySelector("h1");

function init(username) {
  let greeting;
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    greeting = "Morning";
  } else if (currentHour < 17) {
    greeting = "Afternoon";
  } else if (currentHour < 21) {
    greeting = "Evening";
  } else {
    greeting = "Night";
  }

  heading.textContent = `Good ${greeting} ${username}`;
}
init("John");
