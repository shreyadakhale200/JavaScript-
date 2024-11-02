//EXPLANATION
// 1. The original Array
// const fruits = ["apple", "banana", "cherry"];
// Here, fruits is an array of strings representing fruit names in lowercase.

// Using Array.prototype.map() to create a new array.
// 2. Using map() to Transform Each Element:
// const uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());

// 2.1 The map() method is called on the fruits array.
// 2.2 Inside map(), we pass a callback function (fruit => fruit.toUpperCase()) that is applied to each element in the array.

// 2.3 For each element (each fruit name) in fruits, map():

// 2.3.1 Takes fruit, which represents the current fruit name (like "apple", "banana", "cherry").
// 2.3.2 Applies fruit.toUpperCase(), which converts the string to uppercase.
// 2.3.3 Returns the uppercase string to form a new array.

// 2.4 The result is stored in uppercasedFruits.

// 3. Logging the result
// console.log(uppercasedFruits);

// the order of execution works as follows:

//     First, each fruit element is passed to the callback function one by one.
//         The map() function iterates over each element in the fruits array. For each element, it assigns the current fruit name (e.g., "apple") to the fruit parameter of the callback function.

//     Then, fruit.toUpperCase() is executed for each element.
//         Once fruit is assigned, the toUpperCase() method is immediately called on it to convert it to uppercase (e.g., "apple".toUpperCase() becomes "APPLE").

// So, fruit is assigned first (as the parameter), and then fruit.toUpperCase() is executed to transform the fruit name to uppercase. This happens for each item in the array.

// Here’s a closer look at each iteration:

//     First iteration: fruit = "apple" → "apple".toUpperCase() → "APPLE"
//     Second iteration: fruit = "banana" → "banana".toUpperCase() → "BANANA"
//     Third iteration: fruit = "cherry" → "cherry".toUpperCase() → "CHERRY"

// This results in the new array ["APPLE", "BANANA", "CHERRY"].

//CODE
const fruits = ["Mango", "Orange", "Guava"];

// Transforming the array element and and storing it in new array
const Uppercasedfruits = fruits.map((fruit) => fruit.toUpperCase());

// Printing the new transformed array
console.log(Uppercasedfruits);

// Using Array.prototype.push() to add an element
fruits.push("Mosambi");
console.log(fruits);

// Using Array.prototype.filter() to get filters with more than 5 characters
const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits);

// using Array.prototype.map()
const names = ["Raha", "Mansi", "Nehal", "Pragati", "Shivanshi"];
const countNames = names.map((name) => name.length);
console.log(countNames);

// using Array.prototype.filter()
const names_1 = ["Raha", "Mansi", "Nehal", "Pragati", "Shivanshi"];
const countNames_filter = names.filter((name) => name.length > 5);
console.log(countNames_filter);

//Adding a Custom Method to Array.prototype.
Array.prototype.maxLength = () => {
  let max_length = Math.max(...names.map((name) => name.length));
  // If this is ["Alice", "Bob", "Charlotte", "Dave"], then this.map(name => name.length) results in [5, 3, 9, 4].
  // ... = this is the spread syntax  which separates the array values which are lengths of the string.
  // spread syntax is there for the Math.max() function to check each value individually and operate on it.
  // Otherwise the Math.max() function will treat all the array elements as a single argument.

  return names.filter((name) => name.length === max_length);
};

console.log(names.maxLength());
