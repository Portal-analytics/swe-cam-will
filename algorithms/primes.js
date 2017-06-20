// Have the user enter a number and find all Prime Factors (if there are any) and display them.

var prompt = require('prompt');

prompt.start();

prompt.get(['number'], function(err, result) {
  console.log('number entered is ' + result.number);
  for (i = 1; i < result.number; i++) {
    if (result.number % i == 0) {
    }
  }
});
