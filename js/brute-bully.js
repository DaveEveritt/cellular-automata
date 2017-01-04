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

// was brute
terra.registerCreature({
  type: 'ice',
  color: [15, 5, 249],
  maxEnergy: 39,
  initialEnergy: 9.1,
  // size: 8
});

// was bully
terra.registerCreature({
  type: 'fire',
  color: [249, 50, 15],
  initialEnergy: 25,
  reproduceLv: 0.8,
  sustainability: 1.85
  // char: "&#43",
  // size: 8
});

bbTerrarium.grid = bbTerrarium.makeGridWithDistribution([['plant', 50], ['ice', 5], ['fire', 5]]);
bbTerrarium.animate();
