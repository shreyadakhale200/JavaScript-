// for...of: Iterates over values in an iterable (e.g., array values, characters in a string).
// Simplifies looping over arrays and iterable objects like strings, Maps, and Sets.
// Great for accessing values directly, without worrying about indexes.
// Avoids some pitfalls of for...in (e.g., for...in can include inherited properties if used on objects).

// for...in: Iterates over keys (or property names) in an object or array index.
//EXAMPLE :
const arr = ["a", "b", "c"];

for (let value of arr) {
  console.log(value); // Logs: "a","b","c"
}

for (let index in arr) {
  console.log(index); // Logs: 0, 1, 2 (array indexes)
}

// LOOPING THROUGH ARRAY

// 1. For loop
let a = [9, 3, 5, 6, 88];
for (let index = 0; index < a.length; index++) {
  const element = a[index];
  console.log(element);
}

// 2. forEach
// Calls a function once for each array element.

a.forEach((value, index, arr) => {
  console.log(`value = ${value}, index = ${index}, array = ${arr}`);
});

// print all even using forEach
a.forEach((value) => {
  if (value % 2 == 0) console.log(value);
});

// 3. for....of
let object = {
  1: "Delhi",
  2: "Mumbai",
  3: "Nagpur",
  4: "Banglore",
};

// value = holds the value of each element in the iterable.
// iterable = the object you want to iterate over (e.g., ARRAY, STRING, MAP, SET)

// 1. ITERATION OVER ARRAY
// SYNTAX -
// for (const variable of iterable) {
// }

const numbers = [10, 20, 30, 40];
for (const num of numbers) {
  console.log(num);
}

// 2. Iterating over a String
let message = "Hello Shrey";
for (const char of message) {
  console.log(char);
}

// 3. Iterating over a map
const user = new Map();
user.set(1, "Alice");
user.set(2, "Laila");
for (let [key, value] of user) {
  console.log(`${key}: ${value}`);
}

// 4. Iterating over a set
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
for (let num of uniqueNumbers) {
  console.log(num);
}

// Since a Set only contains unique values, each value is printed without duplicates.

// using for....in to iterate over object
const student = {
  name: "Alice",
  age: 20,
  grade: "A",
};

const student1 = {
  name: "Laila",
  age: 21,
  grade: "A++",
};

for (let key in student) {
  console.log(`${key}: ${student1[key]}`);
}

// using for....in to iterate over array
const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(`${index}: ${colors[index]}`);
}
