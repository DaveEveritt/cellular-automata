// create a simple plant creature
// var terra = require('./js/terra.min.js');

window.terra.registerCreature({
  type: 'simplePlant',
  color: [166, 226, 46],
  size: 10,
  reproduceLv: 0.8,
  wait: function() { this.energy += 3; },
  move: false
});

// initialize our environment
var ex1 = new terra.Terrarium(25, 25, {id: 'ex1'});
ex1.grid = ex1.makeGridWithDistribution([['secondCreature', 10], ['simplePlant', 90]]);
ex1.animate(300);
