/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function calculateSum(n) {
  var startTime = new Date();
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  var endTime = new Date();
  var elapsedTime = (endTime - startTime) / 1000;
  return elapsedTime;
}
console.log("Time for sum from 1 to 100:", calculateSum(100), "milliseconds");
console.log("Time for sum from 1 to 100000:", calculateSum(100000), "milliseconds");
console.log("Time for sum from 1 to 1000000000:", calculateSum(1000000000), "milliseconds");
