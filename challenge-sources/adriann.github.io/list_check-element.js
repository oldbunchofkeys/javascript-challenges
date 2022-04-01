function checkNum(nums, findThis) {
    for (i = 0; i < nums.length; i++) {
      if (nums[i] === findThis) {
        return true
      }
    }
    return false
}
  
console.log(checkNum([2,6,7,19], 7));
console.log(checkNum([2,6,7,19], 17));

//   output: 
//   true
//   false