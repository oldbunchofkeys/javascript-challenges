// ↔️ isPalindrome
// Given a string, determine whether it is a palindrome (same forwards and backwards, case-sensitive)

// Ex: isPalindrome("racecar") returns true

// Ex: isPalindrome("abcd") returns false

var isPalindrome = function(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length/2; i++) {
    if (arr[i] !== arr[arr.length-(i + 1)]) {
      return false;
    }
    else return true;
  }
}