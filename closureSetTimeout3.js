function closureSetTimeout() {
  for (var i = 0; i <= 5; i++) {
    function closureInner(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    closureInner(i);
  }
  //.log("Loop finished, i is:", i); // Output: Loop finished, i is: 6
}

closureSetTimeout(); // Output: 0, 1, 2, 3, 4, 5 (expected due to closureInner function creating a new scope for each iteration)
/* In this example, we define an inner function 'closureInner' that takes 'i' as a parameter. 
When we call 'closureInner(i)' inside the loop, it creates a new scope for each iteration, and the value of 'i' is preserved for each setTimeout callback. 
As a result, the callbacks log the expected values from 0 to 5 when they execute. */
