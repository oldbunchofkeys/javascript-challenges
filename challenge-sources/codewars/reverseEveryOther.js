//Reverse every other word in a given string, 
//then return the string. Throw away any leading 
//or trailing whitespace, while ensuring there 
//is exactly one space between each word. 
//Punctuation marks should be treated as if 
//they are a part of the word in this kata.

function reverse(str){
  
  let words = str.trim().split(' ');
  let returnWords = [];
  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) { returnWords.push(words[i].split('').reverse().join().replace(/,/g, ''));
    } else {
      returnWords.push(words[i]);
    }
  }
  return returnWords.join().replace(/,/g, ' ').replace(/  /, ', ');
}