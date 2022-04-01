function largeNum(nums) {
    let biggestNumYet = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > biggestNumYet) {
        biggestNumYet = nums[i];
      }
    }
    return biggestNumYet;
}
console.log(largeNum([3, 1, 2, 5, 2, 10, 4]));
console.log(largeNum([3, 1, 2, 5, 2, 10, 4, 67, 50000]));

// output:
// 10
// 50000