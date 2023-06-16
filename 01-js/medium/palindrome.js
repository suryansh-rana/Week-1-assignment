/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
}function isPalindrome(str) {
  var alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  var left = 0;
  var right = alphanumericStr.length - 1;
  while (left < right) {
    if (alphanumericStr[left] !== alphanumericStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("level"));
console.log(isPalindrome("naman")); 
console.log(isPalindrome("Dark")); 
console.log(isPalindrome("suryansh")); 
module.exports = isPalindrome;
