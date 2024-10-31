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
