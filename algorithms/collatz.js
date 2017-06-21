// Collatz Conjecture - Start with a number n > 1. Find the number of steps it takes to reach one using the following process: If n is even, divide it by 2.
//  If n is odd, multiply it by 3 and add 1.

var prompt = require('prompt');
prompt.start();

prompt.get(['starting_number'], function(err, result) {
  const starting_number = result.starting_number;

  let n = starting_number;
  let steps = 0;
  while (n !== 1) {
    steps++;
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
  console.log(n, 'steps: ', steps);
});
