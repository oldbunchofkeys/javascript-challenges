// ⚖️ unbalancedArray
// Given an array of positive and negative integers, find the number that does not have an opposite



// Ex: unbalancedArray([-1, 4, 1, 5, -4]) -> 5

// Ex: unbalancedArray([12, 1, 21, -21, -1]) -> 12]

function unbalancedArray(nums) {
  let sum = 0;
  for (num of nums) {
    sum += num;
  }
  return sum;
}

console.log(unbalancedArray([12, 1, 21, -21, -1]));
console.log(unbalancedArray([-1, 4, 1, 5, -4]));