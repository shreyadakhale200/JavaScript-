// let age = 43;

// let num = 10;
// let mul = 1;
// for (i = 1; i <= num; i++) {
//   if (i % 2 == 0) {
//     console.log("Even : " + i * 2);
//   } else console.log("Odd : " + i);
// }

// let a = 54;
// let b = 55;

// let result = a > b ? a - b : a + b;
// console.log(result);

// console.log("I am a tutorial on Loops");
// For Loop
// let a = 0;
// for (; a <= 10; a++) console.log(a);

// For in Loop

// let obj = {
//   name: "Harry",
//   role: "Programmer",
//   company: "codeWithHarry AI",
// };

// for (const key in obj) {
//   const element = obj[key];
//   console.log(key, element);
// }

// For of Loop
// for (const iterator of "Shreya") {
//   console.log(iterator);
// }

// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// let n = "Shreya";
// for (const iterator of n) {
//   console.log(iterator);
// }

// const userMap = new Map([
//   ["name", "Alice"],
//   ["age", 25],
//   ["city", "New York"],
// ]);

// for (const [key, value] of userMap) {
//   console.log(`${key}: ${value}`);
// }

// While Loop
// i = 5;
// while (i < 6) {
//   console.log(i);
//   i++;
// }

// do-while loop - runs atleast once
// i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < 6);

// CONDITIONAL STATEMENTS
// 1. If statement
// let num = 6;
// if (num % 2 == 0) console.log("even");

// 2. if else statement
// if (age > 18) console.log("You can drive");
// else console.log("You cannot drive");

// 3. If-else if statement
// let salary = 65000;
// if (salary > 50000) {
//   console.log("Trip");
// } else if (salary > 20000 && salary < 50000) {
//   console.log("Shopping");
// } else {
//   console.log("Watch Movie");
// }

function SumOfNumbers(a, b) {
  let result = a + b;
  return result;
}
console.log(SumOfNumbers(10, 20)); // Output: 30

const multipleResult = function (a, b) {
  return a * b;
};
let z = multipleResult(4, 3);
console.log(z);
