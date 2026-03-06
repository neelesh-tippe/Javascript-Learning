/***** Example of a Closure */

function bankAccount() {
  let balance = 1000;

  return function (amount) {
    balance += amount;
    console.log("Balance:", balance);
  };
}

const deposit = bankAccount();

deposit(500);
deposit(200);

/************Example of Var, Let and Const with their scopes */
var x = 10; // Global scope
var x = 20; // Redeclaration allowed with var
console.log("Global x:", x); // Output: 20
x = 50;
console.log("Global x:", x); // Output: 50

let a = 5; // Global scope
// let a = 10; // SyntaxError: Identifier 'a' has already been declared
console.log("Global a:", a); // Output: 5
a = 15; // Reassignment allowed with let
console.log("Global a:", a); // Output: 15

const b = 25; // Global scope
// const b = 30; // SyntaxError: Identifier 'b' has already been declared
console.log("Global b:", b); // Output: 25
// b = 35; // TypeError: Assignment to constant variable

/**** Example of shadowing */
let n = 10; // Global scope
function test() {
  let n = 20; // Local scope (shadows global n);}
  console.log("Local n:", n); // Output: 20
}
console.log("Local n:", n); // Output: 20

const m = 10; // Global scope
function test() {
  let m = 20; // Local scope (shadows global m);
  console.log("Local n:", m); // Output: 20
}
console.log("Global m:", m); // Output: 10

/****** Example of illegal shadowing */
// let q = 10; // Global scope
// if (true) {
//   var q = 20; // This will affect the global variable q due to var's function scope
//   console.log("Inside block q:", q); // Output: 20
// }
// console.log("Global q:", q); // Output: 20 (unexpected due to var's behavior)

// O/p ===>   SyntaxError: Identifier 'q' has already been declared

/* in below exapme it works because var allows redeclaration and has function scope, 
but it can lead to unexpected behavior. In contrast, let and const do not allow redeclaration in the same scope, 
which helps prevent such issues. */
let p = 10; // Global scope
function test() {
  var p = 20; // Local scope (illegal shadowing with var)
  console.log("Local p:", p); // Output: 20
}
console.log("Global p:", p); // Output: 10
