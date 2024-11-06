console.log("Hello World");
const divElement = document.getElementsByClassName("box1");
console.log(divElement[0].tagName); // DIV
console.log(divElement[0].getAttribute("class"));
// console.log(divElement[1].classList);
let qs = document.querySelector(".box1");
if (qs) {
  qs.textContent = "I love JavaScript";
  console.log(qs.textContent);
} else {
  console.log("Element with class 'box1' not found.");
}
