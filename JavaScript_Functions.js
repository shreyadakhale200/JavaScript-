function nice(name) {
  console.log("Hey " + name + " you are nice");
  console.log("Hey " + name + " you are nice");
  console.log("Hey " + name + " you are good");
  console.log("Hey " + name + " your'e T-shirt is nice!");
  console.log("Hey " + name + " your course is good too");
}

nice("Harry");

//-------------- Sum of two numbers --------------
// function sum(a, b) {
//   return a + b;
// }

// result = sum(3, 5);
// console.log("Sum of these numbers is : " + result);

// const fun1 = (x) => {
//   console.log("I am an Arrow function " + x);
// };

// fun1(43);
// fun1(44);
// fun1(45);

//-------------- Function Hoisting -----------------

// calling the function on top of the function

percentage = PercentageCalculator(478);
console.log(percentage + "%");

function PercentageCalculator(y) {
  return (y / 500) * 100;
}

// console.log(add(5, 10)); // Error: Cannot access 'add' before initialization
// Function expression
// const add = function (a, b) {
//   return a + b;
// };

const myfunction = new Function("a", "b", "return a*b");
let x = myfunction(5, 4);
console.log(x);

// Self-Invoking Function
(function () {
  let w = "Hello I called myself without your permission"; // I will invoke myself
  console.log(w);
})();

const name = "Shreya";
function greet(name) {
  console.log("Hello, " + name);
}

console.log(greet.name);
console.log(greet.length);
