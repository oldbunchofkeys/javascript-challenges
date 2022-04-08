// Write three functions that compute the sum of the numbers in a list: using a for-loop, a while-loop and recursion. (Subject to availability of these constructs in your language of choice.)
const sumFor = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

const sumWhile = function(nums) {
    let sum = 0;
    let i = 0;
    while (i < nums.length) {
      sum += nums[i];
      i++;
    }
    return sum
}

  const sumRecursion = function (nums) {
    if (nums.length === 0) {
      return 0;
    }
    else {
      return nums[0] + sumRecursion(nums.slice(1));
    }
}
console.log(sumFor([1, 2, 3, 4, 5]));
console.log(sumWhile([1, 2, 3, 4, 5]));
console.log(sumRecursion([1, 2, 3, 4, 5]));

// output:
// 15
// 15
// 15