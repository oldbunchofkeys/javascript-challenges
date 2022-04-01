// build a program that outputs a pyramid like this, where the bottom row is the given Number. For example, if given the number 4, the output should be this:
//    #
//   ##
//  ###
// ####
function numToChar (num, char) {
    let string = '';
    for (let i = 0; i < num; i++) {
      string = string + char;
    }
    return string;
  }
  function hashPyramid(num) {
    let hash = '';
    let white = '';
    for (let i = 1; i <= num; i++) {
      hash = numToChar(i, '#');
      white = numToChar(num - i, ' ');
      console.log(white + hash);
    }
  }
  console.log(hashPyramid(9));