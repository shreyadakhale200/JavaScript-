var a = 54; // globally scoped
let b = 1; // locally scoped
for (; b <= 5; b++) {
  b = b + a;
}
console.log(a); // a = 54
console.log(b); // b = 56

var a = 60; // can be re-initialized and re-declared
// value is not fixed
var d = undefined; // var variables are initialized as undefined
console.log(a); // a = 60
