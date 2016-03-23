var assert = require('chai').assert;
var Bag = require('../src/bag');

describe('Bag', () => {
  var bag;

  beforeEach(() => {
    bag = new Bag();
  });

  afterEach(() => {
    bag = null;
  });

  describe('Bag#Bag', () => {
    it('instance of', () => {
      assert.instanceOf(bag, Bag);
    });
  });

  describe('Bag#add', () => {
    it('add an item', () => {
      assert.equal(bag.size(), 0);
      var a = 1;
      bag.add(a);
      assert.equal(bag.size(), 1);
      var exist = false;
      for (var i of bag) {
        if (i === a) {
          exist = true;
        }
      }
      assert.isTrue(exist);
    });
  });

  describe('Bag#isEmpty', () => {
    it('init bag is empty', () => {
      assert.ok(bag.isEmpty());
    });

    it('not empty', () => {
      bag.add(1);
      assert.isFalse(bag.isEmpty());
    });
  });

  describe('Bag#size', () => {
    it('init size is 0', () => {
      assert.equal(bag.size(), 0);
    });

    it('size with 1 item is 1', () => {
      bag.add('a');
      assert.equal(bag.size(), 1);
    });
  });
});