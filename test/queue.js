var assert = require('chai').assert;
var Queue = require('../src/queue');

describe('Queue', () => {
  var queue;

  beforeEach(() => queue = new Queue());
  afterEach(() => queue = null);

  describe('Queue#Queue', () => {
    it('instance of', () => {
      assert.instanceOf(queue, Queue);
    });
  });

  describe('Queue#enqueue', () => {
    it('enqueue an item', () => {
      assert.equal(queue.size(), 0);
      var a = 'a';
      queue.enqueue(a);
      assert.equal(queue.size(), 1);
      var exist = false;
      for (var i of queue) {
        if (i === a) {
          exist = true;
        }
      }

      assert.isTrue(exist);
    });

    it('enqueue nothing should throw error', () => {
      assert.throws(queue.enqueue);
    });
  });

  describe('Queue#dequeue', () => {
    it('dequeue an empty queue return undefined', () => {
      assert.isNull(queue.dequeue());
    });

    it('dequeue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      assert.equal(queue.dequeue(), 1);
      queue.enqueue(3);
      assert.equal(queue.dequeue(), 2);
      assert.equal(queue.dequeue(), 3);
    });
  });

  describe('Queue#isEmpty', () => {
    it('init queue is empty', () => {
      assert.ok(queue.isEmpty());
    });

    it('queue with item is not empty', () => {
      queue.enqueue(1);
      assert.isFalse(queue.isEmpty());
    });
  });

  describe('Queue#size', () => {
    it('init queue size is 0', () => {
      assert.equal(queue.size(), 0);
    });

    it('size with one element is 1', () => {
      queue.enqueue('a');
      assert.equal(queue.size(), 1);
    });
  });

  describe('Queue iterate', () => {
    it('for-of', () => {
      var source = [1, 'a', 3];
      source.forEach((i) => queue.enqueue(i));

      var ret = [];
      for(var i of queue) {
        ret.push(i);
      }

      ret.forEach((item, inx) => {
        assert.equal(item, source[inx]);
      });
    });

    it('for-of empty queue', () => {
      var count = 0;
      for (var i of queue) {
        count++;
      }

      assert.equal(count, 0);
    });
  });

});