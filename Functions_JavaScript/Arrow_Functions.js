const Intro = () => {
  return "Hello World";
};

console.log(Intro()); // This calls the function and logs "Hello World"

const Odd = (num) => {
  if (num % 2 == 0) console.log(num + " is Even");
  else console.log(num + " is Odd");
};
Odd(26);

// If the function has a single parameter,
// you can omit the parenthesis around it
const square = (x) => x * x;
console.log(square(4)); // 16

// Reverse code using arrow function using Imediately Invoked Function Expression
const reverse = ((n) => {
  let reverse = 0;
  while (n != 0) {
    let remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
  }
  console.log(reverse);
})(657);
