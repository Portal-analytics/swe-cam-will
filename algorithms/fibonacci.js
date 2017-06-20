var prompt = require('prompt');

prompt.start();

prompt.get(['number'], function(err, result) {
  console.log(result.number);
  var fibo = [];
  var i = 1;
  var highest_fibo = 0;
  fibo[0] = 0;
  fibo[1] = 1;

  while (highest_fibo < result.number) {
    i++;
    console.log('i is ' + i);
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log('sequence is ' + fibo);
    highest_fibo = fibo[i];
    console.log('highest fibo ' + highest_fibo);
  }
});
