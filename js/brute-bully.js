var bbTerrarium = new terra.Terrarium(120, 60, {
  trails: 0.5,
  // periodic: true,
  cellSize: 8,
  background: [0, 0, 0]
});

terra.registerCreature({
  type: 'plant',
  color: [25, 80, 5],
  size: 10,
  initialEnergy: 5,
  maxEnergy: 20,
  wait: function() {
    // photosynthesis :)
    this.energy += 1;
  },
  move: false,
  reproduceLv: 0.65
});

terra.registerCreature({
  type: 'brute',
  color: [20, 10, 200],
  maxEnergy: 40,
  initialEnergy: 10,
  size: 10
});

terra.registerCreature({
  type: 'bully',
  color: [249, 50, 15],
  // char: "&#43",
  initialEnergy: 24,
  reproduceLv: 0.9,
  sustainability: 3
});

bbTerrarium.grid = bbTerrarium.makeGridWithDistribution([['plant', 50], ['brute', 5], ['bully', 5]]);
bbTerrarium.animate();
