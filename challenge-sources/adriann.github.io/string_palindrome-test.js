function reverseString(str) {
    const splitString = str.split(""); 
    const reverseArray = splitString.reverse(); 
    const joinArray = reverseArray.join("");
    return joinArray;
  }
  
  function palindromes(word) {
    if (word === reverseString(word)) {
      console.log(true);
    } else console.log(false);
  }
  
  console.log(palindromes('bob'));
  console.log(palindromes('tacocat'));
  console.log(palindromes('foo'));

// output:
// true
// undefined
// true
// undefined
// false
// undefined

// why is it outputting an undefined after each expected function output