//Credit Card Validator - Takes in a credit card number from a common credit card vendor (Visa, MasterCard, American Express, Discoverer)
// and validates it to make sure that it is a valid number (look into how credit cards use a checksum).

var prompt = require('prompt');
prompt.start();

prompt.get(['card_number'], function(err, result) {
  card_number = result.card_number.toString(10).split('').map(Number);
  reversed_number = card_number.reverse();

  let odd_sum = 0;
  for (i = 0; i < reversed_number.length; i += 2) {
    odd_sum += reversed_number[i];
  }

  let even_digits = [];
  let j = 0;
  for (i = 1; i < reversed_number.length; i += 2) {
    even_digits[j] = reversed_number[i];
    j += 1;
  }

  const doubled_evens = even_digits.map(function(n) {
    return n * 2;
  });

  let even_sum = 0;
  even_sum = doubled_evens.map(function(n) {
    if (n > 4) {
      n_arr = n.toString(10).split('').map(Number);
      n = n_arr.map(function(n) {
        return n_arr[0] + n_arr[1];
      });
    }
    even_sum += n;
  });
  function verify() {
    if (even_sum + odd_sum % 10 == 0);
    return true;
  }
  verify(even_sum, odd_sum);
  console.log(verify(even_sum, odd_sum));
});
