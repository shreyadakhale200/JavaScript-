let arr = [1, 2, 3, 4, 5, 6];
console.log(arr); // [ 1, 2, 3, 4, 5, 6];

// Array Methods
// console.log(arr.toString()); // 1,2,3,4,5,6
//1. toString()
// toString is used to convert an array to String

//2. join()
//`join()` method is used to join array elements with the specific word mentioned with the join method.

console.log(arr.join(" and ")); // 1 and 2 and 3 and 4 and 5 and 6

///3. pop()
// pop() method is used to remove the element from the array.
console.log(arr);
console.log("before pop " + arr); // before pop 1, 2, 3, 4, 5, 6
arr.pop();
console.log("after pop " + arr); // after pop  1, 2, 3, 4, 5

//4. push()
// `push()`  method is used to insert an element in the array at last position.

console.log(`before push ${arr}`); // before push 1,2,3,4,5
arr.push(10);
console.log(`after push ${arr}`); // after push 1,2,3,4,5,10

// 5. shift()
// `shift()` method is used to remove the first element from the array.

console.log("before shift " + arr); // before shift 1,2,3,4,5,10
arr.shift();
console.log("after shift " + arr); // after shift 2,3,4,5,10

// 6. unshift()
// `unshift()` method is used to add the element in the first position of  an array.
console.log("before unshift " + arr); // before unshift 2,3,4,5,10
arr.unshift(20);
console.log("after unshift " + arr); // after unshift 20,2,3,4,5,10

// 7. delete()
// Add elements can be deleted using the delete operator. Though the element is deleted after deletion it is assigned as undefined, And its memory is still allocated in the array.
console.log("before deletion " + arr); // before deletion 20,2,3,4,5,10
delete arr[2];
console.log("after deletion " + arr); // after deletion 20,2,,4,5,10
console.log(arr.length); // 6
console.log(arr[2]); // undefined

// 8. concat() -
// `concat()`method is used to join the array elements.
let a1 = [1, 2, 3, 5];
let a2 = [3, 54, 76, 8];
let a3 = [5, 7, 98, 5];
console.log(a1.concat(a2, a3)); // [1, 2, 3, 5, 3, 54, 76, 8, 5, 7, 98,  5]
console.log(a1);
// returns a new array
// does not change existing arrays

//9. sort()
// sort method is used to sort the elements in ascending order.
let arr1 = [5, 3, 8, 1, 4];
console.log("Array elements before sort = " + arr1); // Outputs the original array
console.log("Array elements after sort = " + arr1.sort()); // Sorts and outputs the sorted array

// 10. splice() -
// `Splice()` can be used to add new items to an array.
// arr1.splice(
//   `position to add , No of elements to remove , elements to be added , elements to be added_1`
// );
console.log(arr1); // [ 1, 3, 4, 5, 8 ]
arr1.splice(1, 1, 11, 22);
console.log(arr1); // [ 1, 11, 22, 4, 5, 8 ]

// 11. Reverse() -
// `reverse()` method is used to reverse the elements in the array.

console.log("array elements before reverse = " + arr1); // array elements before reverse = 1,11,22,4,5,8
console.log("array elements after reverse = " + arr1.reverse()); // array elements after reverse = 8,5,4,22,11,1

// 12. Map() -
// map() transform each element in an array.
console.log("Elements to Array");
console.log(arr1);
const newArray = arr1.map((ar) => ar * 2);
console.log(newArray);

// 13. filter() -
// filter() Filter elements based on condition

// newArray = [ 16, 10, 8, 44, 22, 2 ]
console.log("filter of array");
const minArrayElement = Math.min(...newArray.map((ar) => ar));
const min = newArray.filter((ar) => ar === minArrayElement);
console.log(min);

// ... = this is the spread syntax  which separates the array values which are lengths of the string.
// spread syntax is there for the Math.max() function to check each value individually and operate on it.
// Otherwise the Math.max() function will treat all the array elements as a single argument.

// 14. reduce() -
// The reduce() function in JavaScript is a versatile method that processes each element in an array and combines them into a single value.
// It "reduces" the array by applying a callback function you define to each element and carrying over the result to the next iteration, ultimately producing a single output value.

// SYNTAX -
// array.reduce((accumulator, currentValue, currentIndex, array) => {
//      logic here
//   }, initialValue);

// accumulator: Holds the result of the previous iteration (or the initialValue on the first iteration).
// currentValue: The current element being process in the array.
// currentIndex (optional): The index of the current element.
// array (optional): The array reduce() was called on.
// initialValue (optional): The initial value to use as the first accumulator value. If omitted, reduce() takes the first element of the array as the initial accumulator, and the iteration starts from the second element.

// Summing all numbers in array
const nums = [1, 2, 3, 4];
const sumOfNums = nums.reduce(
  (valueHolder, current) => valueHolder + current,
  0
);
console.log(sumOfNums);

// 15. from()
// The Array.from() method returns an array from any object with a length property.
// The Array.from() method returns an array from any iterable object.

// SYNTAX - Array.from(object, mapFunction, thisValue)

// object - Required.
// The object to convert to an array.

// mapFunction - Optional
// A map function to call on each item.

// thisValue - Optional
// A value to use as this for the map function

console.log("Generating an array");
const arr_Generate = Array.from({ length: 6 }, (_, x) => x + 1);

console.log(arr_Generate);

// Factorial of all elements in the array using a function and map
const factorial = (n) => {
  let fact = 1;
  for (let index = 1; index <= n; index++) {
    fact = fact * index;
  }
  return fact;
};
console.log(nums);
const fact_Array = nums.map((num) => factorial(num));

console.log(fact_Array);

// Simplified version using ternary operator with recursion
const Factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

let fc_arr = nums.map((num) => Factorial(num));
console.log(fc_arr);

// Calculate factorial and return the sum of the factorial
let fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));

let fact_arr = nums.map((num) => Factorial(num));
fc_arr = nums.map(fact).reduce((prev, current) => prev + current, 0);
console.log(`${fact_arr} ${fc_arr}`);

// Calculate fibonacci
const fibonacci = ((n) => {
  let a = 0;
  let b = 1;
  let sum = 0;
  console.log(a);
  console.log(b);

  for (let index = 1; index <= n; index++) {
    sum = a + b;
    a = b;
    b = sum;
    console.log(`${b}`);
  }
})(5);

// Create a recursive function that takes a positive integer and returns sum of it's
//digits, Example - 123 = 1 + 2 + 3 = 6
const rec = (n) => {
  if (n <= 0) return 0;
  return (n % 10) + rec(Math.floor(n / 10));
};
console.log(rec(123));

// Write a recursive function that calculates x raised to the power of n (i.e., x^n) of every element in the array
const power = (x, n) => {
  if (n == 0) return 1;
  return x * Math.pow(x, n - 1);
};

console.log(nums);
const power_arr = nums.map((num, Power) => power(num, 3));
console.log(power_arr);

// Write a recursive function that counts the number of times a specific value appears in an array.

// Using filter and length to find occurence in an array
nums1 = [12, 12, 43, 5, 65, 4];
let n = 12;
const occurence = nums1.filter((num) => num === n);
const count = occurence.length;
console.log(count);

// Using reduce to find occurence in an array
const occu = nums1.reduce((count, num) => (num === n ? count + 1 : count), 0);
console.log(occu);

//write a program to calculate factorial of a number using reduce and using for loops

// Factorial using  reduce
//1. Generate an array
const arr_nums = (num) => Array.from({ length: num }, (_, i) => i + 1);
console.log(arr_nums(6));

// Using array to calculate factorial
const fact_arr_nums = (n) =>
  arr_nums(n).reduce((prev, current) => prev * current, 1);
console.log(fact_arr_nums(6));

//  Factorial using for loop
fact = 1;
const fact_for = (n) => {
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(fact_for(6));
