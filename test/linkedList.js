var assert = require('chai').assert;
var LinkedList = require('../src/linkedList');

describe('LinkedList', () => {
  var linkedList;

  beforeEach(() => linkedList = new LinkedList());
  afterEach(() => linkedList = null);

  describe('LinkedList#constructor', () => {
    it('instanceof', () => {
      assert.instanceOf(linkedList, LinkedList);
    });
  });

  describe('LinkedList#push', () => {
    it('push item', () => {
      linkedList.push('a');
      assert.equal(linkedList.size(), 1);
    });
  });

  describe('LinkedList#pop', () => {
    it('pop an empty list', () => {
      assert.isNull(linkedList.pop());
    });

    it('pop an item', () => {
      linkedList.push(1);
      linkedList.push('a');

      assert.equal(linkedList.pop(), 1);
    });
  });

  describe('LinkedList#first', () => {
    it('push an item', () => {
      linkedList.push('a');
      assert.equal(linkedList.first(), 'a');
    });

    it('push more than one item', () => {
      linkedList.push('a');
      linkedList.push('b');

      assert.equal(linkedList.first(), 'a');
    });

    it('when pop element', () => {
      linkedList.push('a');
      linkedList.push('b');
      linkedList.push('c');
      linkedList.pop();

      assert.equal(linkedList.first(), 'b');
    });
  });

  describe('LinkedList#last', () => {
    it('push an item', () => {
      linkedList.push('a');
      assert.equal(linkedList.last(), 'a');
    });

    it('push more than one item', () => {
      linkedList.push('a');
      linkedList.push('b');

      assert.equal(linkedList.last(), 'b');
    });

    it('when pop item', () => {
      linkedList.push('a');
      linkedList.push('b');
      linkedList.push('c');
      linkedList.pop();

      assert.equal(linkedList.last(), 'c');
    });
  });

  describe('LinkedList#size', () => {
    it('size of empty list is 0', () => {
      assert.equal(linkedList.size(), 0);
    });

    it('size with item', () => {
      linkedList.push(1);
      linkedList.push(2);
      assert.equal(linkedList.size(), 2);
    });
  });

  describe('for-of', () => {
    it('empty list loop nothing', () => {
      var count = 0;
      for (var _ of linkedList) {
        count++;
      }

      assert.equal(count, 0);
    });


    it('loop from the beginning', () => {
      var source = [1, '4', 7];
      source.forEach((i) => linkedList.push(i));

      var ret = [];
      for (var i of linkedList) {
        ret.push(i);
      }

      assert.equal(ret.length, source.length);
      source.forEach((i, inx) => {
        assert.equal(i, ret[inx]);
      });
    });
  });
});