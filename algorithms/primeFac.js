  var prompt = require('prompt');
  prompt.start();
  prompt.get(['number'], function (err, result) {
    let n = parseInt(result.number);
    let p2 = primes(n,2,new Array())
    console.log(p2);
  });
let global_primes = new Array(); //optimize by adding to global primes
function primes(num,divisor,array){
      if(num == divisor){
          let arrp = array;
          arrp.push(num);
          global_primes.push(num);
          return arrp;

      }else if(global_primes.includes(num)){
        let arrp = array;
          arrp.push(num);
          return arrp;
      }
      else if (num % divisor == 0){
          let arr1 = primes(divisor,2,new Array());
          let arr2 = primes(num/divisor, 2, new Array());
          return arr1.concat(arr2);
      }else{
          return primes(num,divisor+1,array);
      }
  }