//Happy Numbers - A happy number is defined by the following process.
//Starting with any positive integer,
//replace the number by the sum of the squares of its digits,
// and repeat the process until the number equals 1 (where it will stay),
//or it loops endlessly in a cycle which does not include 1.

// Those numbers for which this process ends in 1 are happy numbers, while those that do not
// end in 1 are unhappy numbers. Display an example of your output here. Find first 8 happy numbers.

var prompt = require('prompt');
prompt.start();

prompt.get(['number'], function(err, result) {
  number = result.number.toString(10).split('').map(Number);

  let squares = number.map(function(n) {
    return Math.pow(n, 2);
  });
  function summing_squares(squares) {
    console.log(squares);
    let sum_of_squares = 0;
    sum_of_squares = squares.map(function(n) {
      sum_of_squares += n;
      console.log(sum_of_squares);
    });
    return sum_of_squares;
  }
  summing_squares(squares);
});
