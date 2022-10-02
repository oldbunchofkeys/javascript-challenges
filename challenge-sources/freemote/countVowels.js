// 💬 countVowels
// Given a string, count the vowels and return that count
// Ex: countVowels("adsbecdei") -> a, e, e, i -> 4

function countVowels(s) {
  let letters = s.split('');
  let counter = 0;
  for (let letter of letters) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      counter += 1;
    }
  }
  return counter;
}

console.log(countVowels('adsbecdei'));
console.log(countVowels('ffjnkjnj'));