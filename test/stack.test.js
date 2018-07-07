const assert = require('assert');
const Stack = require('../src/stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => stack = new Stack());
  afterEach(() => stack = null);

  describe('Stack#Stack', () => {
    it('instanceof', () => {
      assert.ok(stack instanceof Stack);
    });
  });

  describe('Stack#push', () => {
    it('push an item', () => {
      assert.equal(stack.size(), 0);
      stack.push('a');
      assert.equal(stack.size(), 1);
      stack.push(1);
      assert.equal(stack.size(), 2);
    });

    it('push nothing will throws error', () => {
      assert.throws(stack.push);
    });
  });

  describe('Stack#top', () => {
    it('access the top item', () => {
      stack.push(1);
      assert.equal(stack.top(), 1);
      stack.push('a');
      assert.equal(stack.top(), 'a');
    });

    it('top of empty stack is null', () => {
      assert.equal(stack.top(), null);
    });
  });

  describe('Stack#pop', () => {
    it('pop the top element', () => {
      stack.push(1);
      assert.equal(stack.pop(), 1);
      assert.equal(stack.size(), 0);
    });

    it('pop order', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      assert.equal(stack.pop(), 3);
      assert.equal(stack.pop(), 2);
      assert.equal(stack.pop(), 1);
    });

    it('pop an empty stack', () => {
      assert.equal(stack.pop(), null);
    });
  });

  describe('Stack#isEmpty', () => {
    it('init stack is empty', () => {
      assert.ok(stack.isEmpty());
    });

    it('non-empty stack', () => {
      stack.push(1);
      assert.equal(stack.isEmpty(), false);
    });
  });

  describe('Stack#size', () => {
    it('size of empty stack is 0', () => {
      assert.equal(stack.size(), 0);
    });

    it('non-empty stack size', () => {
      stack.push(1);
      stack.push(1);
      assert.equal(stack.size(), 2);
    });
  });
});