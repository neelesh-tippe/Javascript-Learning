function closureSetTimeout() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  console.log("Loop finished, i is:", i); // Output: Loop finished, i is: 6
}

closureSetTimeout(); // Output: 6, 6, 6, 6, 6, 6 (unexpected due to var's behavior)

/* In the above example, the variable 'i' is declared with 'var', which has function scope. 
When the setTimeout callback functions are executed after 1 second, they all reference the same variable 'i', which has been incremented to 6 by the time they run. 
As a result, all callbacks log the value 6 instead of the expected values from 0 to 5. */
