const a = 54; // cannot be re-initialized or re-declared
// block scoped
// fixed value
// cannot be initialized with undefined
// const must be initialized during declaration

// let sum = 0;
// for (const a = 1; a <= 5; a++) { // value of a cannot be changed
//   sum = a + sum;
// }
{
  const a = 43;
}
console.log(a);
