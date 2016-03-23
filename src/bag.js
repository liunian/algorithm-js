/**
 * Bag
 *
 * Bag is an abstract data structure which can only add element, iterate the bag,
 * get it's size and test if is empty.
 *
 * 使用 for-of 来迭代，迭代时对顺序不做约定
 *
 * Created by bd on 16/3/23.
 */
function Bag() {
  this._list = [];
  this._index = 0;
}

Bag.prototype = {
  // use iterator and next to make it iterable
  [Symbol.iterator]: function() {
    return this;
  },
  next: function() {
    if (this._index > this._list.length) {
      this._index = 0;
      return {done: true, value: this._list[this._index]};
    }

    return {done: false, value: this._list[this._index++]};
  },

  add: function(item) {
    this._list.push(item);
  },
  isEmpty: function() {
    return !this._list.length;
  },
  size: function() {
    return this._list.length;
  }
};

module.exports = Bag;