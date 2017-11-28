Park = function() {
  this.enclosure = [];
};

Park.prototype = {
  add: function(dinosaur) {
    this.enclosure.push(dinosaur);
  },

  remove: function(type) {
    let newEnclosure = [];
    for (let dinosaur of this.enclosure) {
      if (dinosaur.type !== type) {
        newEnclosure.push(dinosaur);
      }
    }
    this.enclosure = newEnclosure;
  },

  getFertileDinosaurs: function() {
    let fertileDinosaurs = [];
    for (let dinosaur of this.enclosure) {
      if (dinosaur.offspring > 2) {
        fertileDinosaurs.push(dinosaur);
      }
    }
    return fertileDinosaurs;
  },

  howManyDinosAfter: function(years) {
    let dinoKids = {};
    for (let dinosaur of this.enclosure) {
      if (dinoKids.hasOwnProperty(dinosaur.offspring)) {
        dinoKids[dinosaur.offspring]++;
      } else {
        dinoKids[dinosaur.offspring] = 1;
      }
    }

    for (let year = 0; year < years; year++) {
      for (let dinoFertility of Object.keys(dinoKids)) {
        dinoKids[dinoFertility] *= parseInt(dinoFertility, 10) + 1;
      }
    }
    
    let total = 0;
    for (let dinoFertility of Object.keys(dinoKids)) {
      total += dinoKids[dinoFertility];
    }
    return total;
  },
};

module.exports = Park;