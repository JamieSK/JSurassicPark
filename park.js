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
  }
};

module.exports = Park;