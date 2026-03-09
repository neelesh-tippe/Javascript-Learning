function closureSetTimeout2() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("example with let &, i is:"); // Output: example with let &, i is: ReferenceError: i is not defined
}

closureSetTimeout2(); // Output: 0, 1, 2, 3, 4, 5 (expected due to let's block scope)
/* In this example, the variable 'i' is declared with 'let', which has block scope. Each iteration of the loop creates a new block scope, and the value of 'i' is preserved for each setTimeout callback. 
As a result, the callbacks log the expected values from 0 to 5 when they execute. */
