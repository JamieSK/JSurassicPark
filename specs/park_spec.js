assert = require('assert');
Dinosaur = require('../dinosaur');
Park = require('../park');

describe('Park', function() {
  beforeEach(function() {
    park = new Park();
    dino1 = new Dinosaur('Velociraptor', 2);
    dino2 = new Dinosaur('T-Rex', 1);
    dino3 = new Dinosaur('Diplodocus', 4);
  });

  it('should start empty', function() {
    assert.strictEqual(park.enclosure.length, 0);    
  });

  it('should be able to add a dinosaur', function() {
    park.add(dino1);
    assert.strictEqual(park.enclosure.length, 1);
  });

  it('should be able to remove all dinosaurs of a type', function() {
    park.add(dino1);
    park.add(dino1);
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);

    assert.strictEqual(park.enclosure.length, 5);
    
    park.remove('Velociraptor');
    assert.strictEqual(park.enclosure.length, 2);    
  });

  it('should be able to get all dinosaurs with offspring > 2', function() {
    park.add(dino1);
    park.add(dino1);
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);

    assert.strictEqual(park.getFertileDinosaurs().length, 1);    
  });

  it('should be able to calculate # dinos afte 1 year with 1 dino', function() {
    park.add(dino1);
    assert.strictEqual(park.howManyDinosAfter(1), 3);
  });

  it('should be able to calculate # dinos afte 2 years with 1 dino', function() {
    park.add(dino1);
    assert.strictEqual(park.howManyDinosAfter(2), 9);
  });

  it('should be able to calculate # dinos afte 2 years with 2 dinos', function() {
    park.add(dino1);
    park.add(dino1);
    assert.strictEqual(park.howManyDinosAfter(2), 18);
  });
});
