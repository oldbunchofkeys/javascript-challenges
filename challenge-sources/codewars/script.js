//Write a function, persistence, that takes in a positive 
//parameter num and returns its multiplicative persistence, 
//which is the number of times you must multiply the digits 
//in num until you reach a single digit.



//this function returns an array of items [nums, product], where "nums" 
//is an array of "num"'s digits, and "product" is the product of the digits
function productNumberDigits(num) {
  //creates an array of argument's digits
  let nums = Array.from(String(num), Number);
  //multiplies array items together
  let product = nums.reduce((previousValue, currentValue) => previousValue * currentValue);
  // return both nums and product in an array
  let result = [nums, product];
  return result;
}

function persistence(num) {
  //check if num is a single digit number, and if it is, return 0;
  if (productNumberDigits(num)[0].length === 1) {
    return 0;
  }
  let count = 1;
  let productWithDigits = productNumberDigits(num)[1];
  console.log(productWithDigits);
  // while (productNumberDigits(productWithDigits)[0].length !== 0) {
  //   count += 1;
  //   productWithDigits = productNumberDigits(productWithDigits);
  // };
  // return count;
}
console.log(persistence(1223));