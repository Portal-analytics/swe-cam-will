// Find Cost of Tile to Cover W x H Floor - Calculate the total cost of tile it would take to cover a floor plan of width and height, using a cost entered by the user.

var prompt = require('prompt');

prompt.start();

prompt.get(['width', 'height', 'cost'], function(err, result) {
  sq_area = result.width * result.height;
  total_cost = sq_area * result.cost;

  console.log('the total cost is ' + total_cost);
});
