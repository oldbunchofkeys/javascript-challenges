// another one, given an array of words, print each word and its index in the array
// ex.
// ['cat', 'dog', 'apple'] prints:
// cat 0
// dog 1
// apple 2
function printStringAndIndex(strings) {
    for (let i = 0; i < strings.length; i++) {
      let printThis = strings[i] + ' ' + i;
      console.log(printThis);
    }
}
console.log(printStringAndIndex(['cat', 'mouse', 'rat', 'dog', 'chicken']));
console.log(printStringAndIndex(['fiddle', 'banjo', 'guitar', 'bass']));
console.log(printStringAndIndex(['nine', 'six', 'three', 'one']));

// output:
// cat 0
// mouse 1
// rat 2
// dog 3
// chicken 4
// undefined
// fiddle 0
// banjo 1
// guitar 2
// bass 3
// undefined
// nine 0
// six 1
// three 2
// one 3