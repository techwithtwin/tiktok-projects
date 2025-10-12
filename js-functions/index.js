// JavaScript Functions
/*
A function is like a box that is used to organize some
group of related stuff( but in our case code )

You can only use a function when you execute it or call it
other than that it is just a useless box

The function can accept data which is are called parameters
and when you call the function you give it the data it requires
called arguments.

Syntax:
to create a function start with the function keyword
followed by parenthesis and then followed by curly brackets
which are also called function body.

the return value of a function can be assigned to a variable

We've functions that return a value to you, and others don't return
those that don't return return undefined by default.

There are many ways of creating a function but let's focus on the function 
declaration, and function expressions

others include -> arrow functions,anonymous functions, Immediately involked 
function expressions, Higher-order functions, callback functions,

Function scope, local scope


Using a greeting function
e.g 

NEXT: we will talk about arrow functions

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
