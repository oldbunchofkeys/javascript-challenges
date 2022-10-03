// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
  let firstNums = [];
  let tableNums = [];
  for (let i = 1; i <= size; i++) {
    firstNums.push(i);
  }
  for (let num of firstNums) {
    tableNums.push(firstNums.map(x => x * num));
    
  }
  return tableNums;
}

console.log(multiplicationTable(5));