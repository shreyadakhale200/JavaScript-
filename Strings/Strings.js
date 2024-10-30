// Accessing character in the String
let studentname = "Shreya Dakhale";
console.log(studentname[0]); // S
console.log(studentname[1]); // h
console.log(studentname[2]); // r
console.log(studentname[3]); // e
console.log(studentname[4]); // y
console.log(studentname[5]); // a
console.log(studentname[6]); // (space)

// String length
console.log(studentname.length);

// template literal
let friend_1 = "Pragati";
let friend_2 = "Nehal";

// normal print
console.log(
  "Her name is " +
    studentname +
    " and her friend's name are " +
    friend_1 +
    " and " +
    friend_2
);

// Template Literals use backticks instead of quotes to define a string
console.log(
  `Her name is ${studentname} and her friend's names are ${friend_1} and ${friend_2}`
);

// ${} - string interpolation

// Slicing a String
console.log(studentname.slice(0, 4));
// 0 - Index
// 4 - Number of characters from the Index

console.log("clic " + studentname.slice(2));
// 2 - Number of characters from the Index to the end

// Replace a String
console.log(studentname.replace("Sh", "aa"));
// Sh - Replace String
// aa - Replace Sh with this line

// Concatenate String
let n = studentname.concat("Shreya", "Bitch");
console.log(n);
// we can use + to join String

// String Lowercase function
console.log(studentname.toLowerCase());

// String Uppercase function
console.log(studentname.toUpperCase());

// Remove whitespaces
let sName = "    Shreya Shreya    ";
console.log("name trim " + sName.trim());

console.log(sName); //    Shreya Shreya

console.log(studentname);
// Strings are immutable
// In JavaScript, strings are immutable,
// meaning once a string is created, it cannot be changed or modified directly.
// When you manipulate a string, JavaScript does not change the original string
// but instead creates a new string with the modified content.
