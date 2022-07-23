// ↔️ isPalindrome
// Given a string, determine whether it is a palindrome (same forwards and backwards, case-sensitive)

// Ex: isPalindrome("racecar") returns true

// Ex: isPalindrome("abcd") returns false

const isPalindrome = function(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length/2; i++) {
    if (isNaN(parseInt(arr[i])) === false) {
      return false;
    }
    else if (arr[i] !== arr[arr.length-(i + 1)]) 
      return false;
  }
  return true;
}

console.log(isPalindrome('b33b'));
console.log(isPalindrome('boob'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('tit'));
console.log(isPalindrome('racecaR'));