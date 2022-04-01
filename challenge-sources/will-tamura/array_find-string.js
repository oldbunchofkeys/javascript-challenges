function stringFind(strings, stringToFind) {
    let found = false;
    for (let i = 0; i < strings.length; i++) {
      if (strings[i] === stringToFind) {
        found = true;
        return found;
      }
    }
    return found;
}
console.log(stringFind(['cat', 'mouse', 'rat', 'dog', 'chicken'], 'dog'));
console.log(stringFind(['fiddle', 'banjo', 'guitar', 'bass', ], 'mandolin'));
console.log(stringFind(['nine', 'six', 'three', 'one', ], 'three'));

// output:
// true
// false
// true