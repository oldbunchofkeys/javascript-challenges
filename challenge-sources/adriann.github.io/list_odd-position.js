//i'm assuming this means 'print the values where the array's index is an odd number'
function oddPosition (things) {
    let newArrayOddIndex = [];
    for (i = 1; i < things.length; i += 2) {
      newArrayOddIndex.push(things[i]);
    }
    return newArrayOddIndex;
}
  
console.log(oddPosition([5,3,6,8,2,1,4]));
console.log(oddPosition([3,6,8,2,1,'whaaaat','oh, hes doing strings now']));

// output: [ 3, 8, 1 ]
// [ 6, 2, 'whaaaat' ]
