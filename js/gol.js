
var gameOfLife = new terra.Terrarium(50, 50, {
  trails: 0.9,
  periodic: true,
  size: 10,
  background: [22, 22, 22]
});

terra.registerCA({
  type: 'GoL',
  color: [46, 200, 180],
  colorFn: function () { return this.alive ? this.color + ',1' : '0,0,0,0'; },
  process: function (neighbors, x, y) {
    var surrounding = neighbors.filter(function (spot) {
      return spot.creature.alive;
    }).length;
    this.alive = surrounding === 3 || surrounding === 2 && this.alive;
    return true;
  }
}, function () {
  this.alive = Math.random() < 0.5;
});

gameOfLife.grid = gameOfLife.makeGrid('GoL');
gameOfLife.animate();
