// 🤓 sumMultiples
// Given a number, count how many numbers below it are multiples of EITHER 3 OR 5

// Then, sum those multiples together



// Ex: sumMultiples(10) -> 3 + 5 + 6 + 9 -> returns 23

// Ex: countOdd(5) -> 1, 3 -> returns 2

var sumMultiples = function(n) {
  let nums = [];
  while(n--) {
    if (n % 3 === 0 || n % 5 === 0) {
      nums.push(n);
    }
  }

  let sum = 0;
  for (num of nums) {
    sum += num;
  }
  return sum;
}

console.log(sumMultiples(15));
