function reverseList(things) {
    let newThings = [];
    for (i = 0; i < things.length; i++) {
      newThings.unshift(things[i]);
    }
    return newThings;
}
console.log(reverseList(['chicken', 3,'foo', 5, 'cheese', 42]));
console.log(reverseList(['banjo', 'fiddle', 'mandolin', 'guitar', 'harmonica', 'washtub bass']));

// output:
// [ 42, 'cheese', 5, 'foo', 3, 'chicken' ]
// [
//   'washtub bass',
//   'harmonica',
//   'guitar',
//   'mandolin',
//   'fiddle',
//   'banjo'
// ]