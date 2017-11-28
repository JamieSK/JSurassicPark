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
    let initialToGrowth = {};
    for (let dinosaur of this.enclosure) {
      if (initialToGrowth.hasOwnProperty(dinosaur.offspring)) {
        initialToGrowth[dinosaur.offspring]++;
      } else {
        initialToGrowth[dinosaur.offspring] = 1;
      }
    }

    let total = 0;
    for (let initialString in initialToGrowth) {
      let a = initialToGrowth[initialString];
      let b = parseInt(initialString, 10) + 1;
      let t = years;
      total += a * (b ** t);
    }
    return total;
  },
};

module.exports = Park;