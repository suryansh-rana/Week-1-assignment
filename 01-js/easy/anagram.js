/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {}

  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  var frequencyMap1 = {};
  var frequencyMap2 = {};
  for (var i = 0; i < str1.length; i++) {
    var char1 = str1[i];
    var char2 = str2[i];
    frequencyMap1[char1] = (frequencyMap1[char1] || 0) + 1;
    frequencyMap2[char2] = (frequencyMap2[char2] || 0) + 1;
  }
  for (var char in frequencyMap1) {
    if (frequencyMap1[char] !== frequencyMap2[char]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("spar", "rasp"));
console.log(isAnagram("hello", "bye"));
console.log(isAnagram("suryansh", "yashurns"));
module.exports = isAnagram;
