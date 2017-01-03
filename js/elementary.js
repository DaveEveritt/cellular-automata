var elementary = new terra.Terrarium(60, 60);

terra.registerCA({
  type: 'elementary',
  alive: false,
  ruleset: [1, 0, 0, 1, 0, 0, 1, 0].reverse(), // rule 146
  colorFn: function () { return this.alive ? this.color + ',1' : '0,0,0,0'; },
  process: function (neighbors, x, y) {
    if (this.age === y) {
      var index = neighbors.filter(function (neighbor) { return neighbor.coords.y === y - 1;
      }).map(function (neighbor) { return neighbor.creature.alive ? 1 : 0; });
      index = parseInt(index.join(''), 2);
      this.alive = isNaN(index) ? !x : this.ruleset[index];
    }
    return true;
  }
});

elementary.grid = elementary.makeGrid('elementary');
elementary.animate();
