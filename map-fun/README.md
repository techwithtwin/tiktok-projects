# JavaScript map function

- it is a higher order function in JavaScript because it receives a function as an argument.
- The function it receives as an argument is also called callback function.
- The map function acts on arrays.
- It is comonly used to transform or modify an existing array to something new but it does not change the existing array, it only creates a new one.
- Whatever the function returns becomes the new element
- map() does not execute the function on empty elements.

## Syntax

array.map(fn,thisValue)
fn(currentItem,index, arr)

- fn is required and this is the function doing the hard work
- thisValue - this is the value passed to the function and can be used as its `this` value
- currrentItem - required - this is the item being acted on
- index - optional - the index of the item being acted on
- arr - optional - the array of the current element.
