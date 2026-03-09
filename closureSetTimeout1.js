function closureSetTimeout1() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("print value of i after every second:", i); // Output: Loop finished, i is: 6
}

closureSetTimeout1(); // Output: 6, 6, 6, 6, 6, 6 (unexpected due to var's behavior)

/* In this example, the setTimeout callbacks are scheduled to run at different times (i * 1000 milliseconds), but they still reference the same variable 'i'. 
As a result, all callbacks will log the value 6 when they execute, which is not the intended behavior. 
To fix this issue, we can use 'let' instead of 'var' to declare 'i', which will create a new block scope for each iteration of the loop. */
