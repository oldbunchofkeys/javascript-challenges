//Write a function that checks if a given 
//string (case insensitive) is a palindrome.

function isPalindrome(x) {
  let lowercase = x.toLowerCase();
   let counter = 0;
   for (i=0; i < lowercase.length; i++) {
     let arrays = [lowercase[i], lowercase[lowercase.length - (i + 1)]];
     if (arrays[0] === arrays[1]) {
       counter++;
     }
   }
   return counter === lowercase.length ? true : false;
 }