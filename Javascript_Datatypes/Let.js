let a = 54; // This is the outer `a`, with block scope in the main block
let sum = 0;

for (let a = 1; a <= 5; a++) {
  // This `a` is local to the `for` loop block
  sum = a + sum;
}
// cannot be initialized with undefined
console.log(sum); // 15, because it sums 1 + 2 + 3 + 4 + 5
console.log(a); // 54, the value of the outer `a`
