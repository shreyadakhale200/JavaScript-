function Negative_positive(num) {
  if (num > 0) console.log(num + " is positive");
  else if (num == 0) console.log(num + " is 0");
  else console.log(num + " is negative");
}

Negative_positive(43);

// function used as a value
function even_odd(num) {
  if (num % 2 == 0) return num + " is even";
  else {
    return num + " is odd";
  }
}

let a = even_odd(54);
console.log(a);

// function expression
// function stored in a variable is called function expression
// function expression can be
// 1. without a name
// 2. with a name

// function expression without name
const mul = function (a, b) {
  return a * b;
};
let z = mul(3, 5);
console.log(z);

// function expression with name
const sum = function Sum_Numbers(a, b) {
  return a + b;
};
console.log(sum(5, 6));

// function declaration with function hoisting
// default behavior of declaring function on top of the current scope
powerNumber(6, 2);
function powerNumber(a, b) {
  console.log(Math.pow(a, b));
}

// variable declaration with function hoisting
let mul_num = function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let multiply = num * i;
    console.log(num + " X " + i + " = " + multiply);
  }
};
mul_num(5);

// Function which can be hoisted
let percentage = percentageCalculation(475);
console.log(percentage + "%");

function percentageCalculation(num) {
  return (num / 500) * 100;
}

// Function which cannot be hoisted
// console.log(add(3, 4));
// const addSum = function add(a, b) {
//   return a + b;
// };

// Imediately Invoked Function expression IIFE
const result = (function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
})(5);
console.log("factorial of " + 5 + " is " + result);
// console.log(factorial(5));

const reverse = (function (num) {
  let reverse_number = 0;
  while (num !== 0) {
    let remainder = num % 10;
    reverse_number = reverse_number * 10 + remainder;
    num = Math.floor(num / 10);
  }

  return reverse_number;
})(546);

console.log("reverse of " + 546 + " is " + reverse);

// # Calculate factorial, eliminate preceding zeros at the end and print count of those zeros

const factorial_Res = (function (num) {
  let fact = 1;
  let count = 0;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  while (fact % 10 == 0) {
    fact /= 10;
    count++;
  }

  console.log("Factorial without preceding zeros is = " + fact);
  console.log("Count of preceding zeros are = " + count);
})(20);

let functions = function (reverse) {
  return reverse;
};
console.log(functions(reverse)); // 645

// Functions as Objects with methods and properties
function studentDetails(rollNo, name, phone, totalMarks) {
  // Private variables
  let studentRollNo = rollNo;
  let studentName = name;
  let studentPhone = phone;
  let totalMarksScored = totalMarks;

  // Private function to calculate percentage
  function calculatePercentage() {
    return (totalMarksScored / 500) * 100;
  }

  // Public methods
  return {
    getRoll: function () {
      return studentRollNo;
    },
    getName: function () {
      return studentName;
    },
    getPhone: function () {
      return studentPhone;
    },
    getPercentage: function () {
      return calculatePercentage();
    },
    displayDetails: function () {
      console.log("Roll No:", this.getRoll());
      console.log("Name:", this.getName());
      console.log("Phone:", this.getPhone());
      console.log("Total Marks:", totalMarksScored);
      console.log("Percentage:", this.getPercentage().toFixed(2) + "%");
    },
  };
}

// Creating a student object
const student = studentDetails(101, "John Doe", "123-456-7890", 450);

// Accessing the details
student.displayDetails();

// Trying to access private variables directly
console.log(student.studentRollNo); // undefined, as it's private
