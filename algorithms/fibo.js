  var prompt = require('prompt');
  prompt.start();
  prompt.get(['number'], function (err, result) {
    let n = parseInt(result.number);
    if(n <2){
        console.log('number in sequence is '+n);
    }
    else{
        var numarray = new Array();
        numarray.push(0),
        numarray.push(1);
        let nf = recursiveFib(0,1,n,n-2,numarray)
        console.log(nf);
    }

  });

  function recursiveFib(sum1,sum2,goalsum,goaltotal,numarray){
      let sum3 = sum1+sum2;
      if(sum3==goalsum || goaltotal == 0){
          let numarray2 = numarray;
          numarray2.push(sum3);
          return numarray2;
      }
      else{
          let numarray2 = numarray;
          numarray2.push(sum3);
          return recursiveFib(sum2,sum3,goalsum,goaltotal-1,numarray2);
      }
  }