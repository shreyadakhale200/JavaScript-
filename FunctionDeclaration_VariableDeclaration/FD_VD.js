// Function Declaration
PercentageCalculator(487);
function PercentageCalculator(y) {
  var percentage = (y / 500) * 100;
  console.log(percentage + " %");
}

// Variable Declaration
var Multiple = function MultiplicationTable(num) {
  for (var i = 1; i <= 10; i++) {
    var table = num * i;
    console.log(num + " X " + i + " = " + table);
  }
};
Multiple(5);

// Self-Invoking Function declared in the variable to be used as an argument in other function
var fact = (function Factorial(n) {
  var mutliply = 1;
  for (var i = n; i > 0; i--) {
    mutliply = i * mutliply;
  }
  console.log("Factorial of " + n + " is = " + mutliply);
  return mutliply;
})(5);

(function sum(Factorial) {
  var sum = 0;
  while (Factorial != 0) {
    var rem = Factorial % 10;
    sum = sum + rem;
    Factorial = Factorial / 10;
  }
  console.log(sum);
})(fact);

// Function have properties and methods
function Sum() {
  var num = 23;
  var num1 = 54;
  return num1 + num;
}

// Adding a property to the function
Sum.description = "Sum function Returns the sum of other two numbers.";

// Adding a method to the function
Sum.PrintSum = function () {
  console.log("Sum of 23 and 54 is = " + Sum());
};
console.log(Sum());
console.log(Sum.description);
Sum.PrintSum();
console.log(Sum.name);
console.log(Sum.length);
