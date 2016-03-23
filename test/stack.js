var assert = require('chai').assert;
var Stack = require('../src/stack');

describe('Stack', () => {
  var stack;

  beforeEach(() => stack = new Stack());
  afterEach(() => stack = null);

  describe('Stack#Stack', () => {
    it('instanceof', () => {
      assert.instanceOf(stack, Stack);
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
      assert.isNull(stack.top());
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
  });

  describe('Stack#isEmpty', () => {
    it('init stack is empty', () => {
      assert.isTrue(stack.isEmpty());
    });

    it('non-empty stack', () => {
      stack.push(1);
      assert.isFalse(stack.isEmpty());
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