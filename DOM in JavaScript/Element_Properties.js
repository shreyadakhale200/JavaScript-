// 1. Content Properties
// (1) `innerHTML` : Gets or sets the HTML markup contained within the element.

// The issue here is that getElementsByClassName returns an HTMLCollection (similar to an array-like object) of elements with the specified class name. .
// This means you can't directly use innerHTML on the entire collection.
// You need to access a specific element within the collection.
// let b1 = document.getElementsByClassName("box1");
// b1[0].innerHTML = "<p>Hello World</p>";

// SYNTAX:
// element.innerHTML = "<p>Hello World</p>";

//EXAMPLE:
let b1 = document.querySelector(".box1");
b1.innerHTML = " Hi !!!";

//(2) `textContent`: Gets or sets the text content inside an element, without HTML tags.

// SYNTAX:
// element.textContent = "Hello World";

//EXAMPLE:
let b2 = document.querySelector(".box2");
b2.textContent = "Shreya";

//(3)  `innerText`: Similar to textContent but renders text as it appears to the user (honors CSS display and visibility).

// SYNTAX:
// element.innerText = "Hello World";

// EXAMPLE:
let b3 = document.querySelector(".box3");
b3.innerText = "soo so";

//(4) `outerHTML`: Gets or sets the HTML markup of the element, including the element itself.

// SYNTAX:
// console.log(element.outerHTML); // Prints the entire element as HTML

// EXAMPLE:
let b4 = document.querySelector(".box4");
console.log(b4.outerHTML); // Prints the entire element as HTML

// OUTPUT ON CONSOLE:
// <div class="box4">Box4</div>

// 2. Attribute Properties

//(1) `id`: Gets or sets the id attribute of an element.
// element.id = "newId";
// console.log(element.className);

//(2) `className`: Gets or sets the class(es) of an element as a string (space-separated if multiple classes).
// element.className = "newClass";
// console.log(element.className);

//(3) `classList`: Provides methods to add, remove, or toggle classes easily.
// element.classList.add("NewClass");
// element.classList.remove("oldClass");
// element.classList.toggle("toggleClass");

//(4) `getAttribute` and `setAttribute`: Accesses or modifies an attribute by name.
// element.getAttribute("href");
// element.setAttribute("src", "image.jpg");

//(5) `hasAttribute` and `removeAttribute`: Checks if an attribute exists or removes it.
// element.hasAttribute("title"); // Returns true or false
// element.removeAttribute("alt");

// 3. Style Properties

//(1) `style`: Allows inline styling of an element.

// SYNTAX:
// element.style.color = "blue";
// element.style.fontSize = "20px";

// EXAMPLE:
b1.style.color = "blue";
b1.style.backgroundColor = "red";
b1.style.fontSize = "20px";
// Check if the element has the class 'box1'
console.log(b1.classList.contains("box1")); // true or false

//(2) `classList`: This also affects styling by adding/removing/toggling classes that may apply CSS styles.

// SYNTAX:
// element.classList.add("highlight");

// EXAMPLE:
b2.classList.add("highlight");
console.log(b2.classList);

// 4. Position and Size Properties

//(1) `offsetHeight and offsetWidth`: The visible height and width of the element,
// including padding and borders.
// SYNTAX:
// console.log(element.offsetHeight);
// console.log(element.offsetWidth);

// EXAMPLE:
console.log(b2.offsetHeight);
console.log(b2.offsetWidth);

//(2) `clientHeight` and `clientWidth`: The height and width of the element including padding,
// but excluding borders, margins, and scrollbars.

// SYNTAX:
// console.log(element.clientHeight);
// console.log(element.clientWidth);

// EXAMPLE:
console.log(b2.clientHeight);
console.log(b2.clientWidth);

//(3) `scrollHeight` and `scrollWidth`: The total height and width of an element's content, including content not visible on the screen.

// SYNTAX:
// console.log(element.scrollHeight);
// console.log(element.scrollWidth);

// EXAMPLE:
console.log(b2.scrollHeight);
console.log(b2.scrollWidth);

//(4) `offsetTop` and `offsetLeft`: The distance of the element relative to its closest positioned ancestor.

// SYNTAX:
// console.log(element.offsetTop);
// console.log(element.offsetLeft);

// EXAMPLE:
console.log(b2.offsetTop);
console.log(b2.offsetLeft);

// 5. Event Properties

// (1) onclick, onmouseover, onchange, etc.: Properties that can be set to handle specific events.

// SYNTAX:
// element.onclick = () => console.log("Clicked");

// EXAMPLE:
b1.onclick = () => console.log("Clicked");
b2.onmouseover = () => console.log("Mouse Hovered");
b3.onchange = () => console.log("Hey");

function ChangeContent() {
  const t = document.querySelector("#text");
  t.textContent = "Hey Shreya";
}

console.log(document.body.children); // [div.container, script]
console.log(document.body.childNodes[1]); // <div class="container"></div>
console.log(document.body.childNodes[1].children); // HTMLCollection(5) [div.box1, div.box2.highlight, div.box3, div.box4, div.box5]
console.log(document.body.childNodes[1].childNodes); // NodeList(11) [text, div.box1, text, div.box2.highlight, text, div.box3, text, div.box4, text, div.box5, text]
console.log(document.body.childNodes[1].parentNode); // <body></body>
console.log(document.body.childNodes[1].firstChild); // #text
console.log(document.body.childNodes[1].lastChild); // #text
console.log(document.body.childNodes[1].firstElementChild); // <div class="box1" style="color:blue;background-color:red;"font-size:20px">Hi !!!</div>
console.log(document.body.childNodes[1].lastElementChild); // <div class='box5">Box5</div>
console.log(document.body.childNodes[1].firstElementChild.parentNode); // <div class="container">...</div>

console.log(document.body.childNodes[1].children[0]);
// <div class="box1" style="color:blue;background-color:red;"font-size:20px">Hi !!!</div>

console.log(document.body.childNodes[1].children[1]);
// <div class="box2 highlight">Shreya</div>

console.log(document.body.childNodes[1].children[2]);
// <div class=box3"> soo so </div>

console.log(document.body.childNodes[1].children[3]);
// <div class=box4">...</div>

console.log(document.body.childNodes[1].children[4]);
// <div class=box5">Box5</div>
