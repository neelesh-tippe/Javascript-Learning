/******** Example 1: Hoisting with var ************/

console.log("a:" + a); //undefined
var a = 5;

/******** Example 2: Hoisting with var ************/

console.log("b:" + b); //10
b = 10;
var b;

/********* Example 3: Hoisting with let ***********/

// console.log("c:" + c); // ReferenceError: c is not defined
// let c = 15;

/********* Example 4: Hoisting with function declarations ***********/

sayHi();
function sayHi() {
  console.log("Hi!");
}
//Hi!

/********* Example 5: Hoisting with function expressions ***********/

// sayHello();
// var sayHello = function () {
//   console.log("Hello!");
// };
// TypeError: sayHello is not a function
