/**
 * Double linked list
 */

/**
 * Node
 * @constructor
 */
function Node() {
  this.value = null;
  this.prev = null;
  this.next = null;
}

function LinkedList() {
  this._first = null;
  this._last = null;
  this._count = 0;
  this._iter = null;
}

LinkedList.prototype = {
  // use iterator and next to make it iterable
  [Symbol.iterator]: function() {
    return this;
  },
  next: function() {
    if (!this._iter) {
      this._iter = this._first;
      return {done: true, value: null};
    }

    var value = this._iter.value;
    this._iter = this._iter.next;
    return {done: false, value: value};
  },
  push: function(item) {
    var node = new Node();
    node.value = item;

    if (!this._first) {
      this._first = node;
      this._iter = this._first;
    }

    if (this._last) {
      this._last.next = node;
      node.prev = this._last;
    }
    this._last = node;
    this._count++;
  },
  pop: function() {
    var top = this._first;

    if (!top) {
      return null;
    }

    var value = top.value;
    this._first = this._first.next;
    this._iter = this._first;
    top = null;
    this._count--;

    return value;
  },
  first: function() {
    return this._first ? this._first.value : null;
  },
  last: function() {
    return this._last ? this._last.value : null;
  },
  size: function() {
    return this._count;
  }
};

module.exports = LinkedList;