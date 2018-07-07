const assert = require('assert');
const Queue = require('../src/queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => queue = new Queue());
  afterEach(() => queue = null);

  describe('Queue#Queue', () => {
    it('instance of', () => {
      assert.ok(queue instanceof Queue);
    });
  });

  describe('Queue#enqueue', () => {
    it('enqueue an item', () => {
      assert.equal(queue.size(), 0);
      const a = 'a';
      queue.enqueue(a);
      assert.equal(queue.size(), 1);
      let exist = false;
      for (let i of queue) {
        if (i === a) {
          exist = true;
        }
      }

      assert.ok(exist);
    });

    it('enqueue nothing should throw error', () => {
      assert.throws(queue.enqueue);
    });
  });

  describe('Queue#dequeue', () => {
    it('dequeue an empty queue return undefined', () => {
      assert.equal(queue.dequeue(), null);
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
      assert.equal(queue.isEmpty(), false);
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
      const source = [1, 'a', 3];
      source.forEach((i) => queue.enqueue(i));

      const ret = [];
      for(let i of queue) {
        ret.push(i);
      }

      assert.equal(ret.length, source.length);
      source.forEach((item, inx) => {
        assert.equal(item, ret[inx]);
      });
    });

    it('for-of empty queue', () => {
      let count = 0;
      for (let i of queue) {
        count++;
      }

      assert.equal(count, 0);
    });
  });

});