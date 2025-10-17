/*
Given a string, return an array with the letters that appears most frequently.
If multiple letters appear with the maximum frequency,
return an array with all the elements e.g []. Treat letters as case-sensitive.

Example:
mostRepeating("Hello World! of") // "l"
mostRepeating("I have been looking to your mother!") // "e"

*/

function mostRepeating(str = "") {
  let charFreq = {};

  for (let i = 0; i < str.length; i++) {
    let currentItem = str[i];
    if (charFreq[currentItem]) {
      charFreq[currentItem] = ++charFreq[currentItem];
    } else {
      charFreq[currentItem] = 1;
    }
  }

  let mr = [];
  Object.entries(charFreq).forEach((item) => {
    if (!mr.length) {
      mr = item;
      return;
    }
    if (item[1] > mr[1]) {
      mr = item;
    }
  });

  return mr;
}

const res = mostRepeating("Hello world!");

console.log(res);
