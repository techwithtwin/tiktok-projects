# JS For Each

- This function is called for each element in an array
- it's a higher order function because it receives a function as an argument
- it is not executed on empty arrays

## Syntax

```js
array.forEach(function (currentItem, itsIndex, arr) {}, thisValue);
```

The function - required - function to run on each element
currentItem - required - the value of the current item
index is optional - index of the current element
arr is optional
thisValue is optional as well. By default it's undefined, this is a value passed to the function as it's this value

- the function returns undefined.
- You can also use arrow functions to shorten the loop

It can also be used with sets and Maps.
