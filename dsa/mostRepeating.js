/*
Given a string, return the letter that appears most frequently.
If multiple letters appear with the maximum frequency,
return the letter that appears earliest in the alphabet.
If the string has no letters, return null. Treat letters as case-sensitive.

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

  console.log(charFreq);
}

mostRepeating("Hello World! of");
