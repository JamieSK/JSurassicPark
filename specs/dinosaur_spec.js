assert = require('assert');
Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {
  beforeEach(function() {
    dinosaur = new Dinosaur('Velociraptor', 2);
  });

  it('should have a type', function() {
    assert.strictEqual(dinosaur.type, 'Velociraptor');
  });

  it('should have a number of offspring', function() {
    assert.strictEqual(dinosaur.offspring, 2);
  });
});
