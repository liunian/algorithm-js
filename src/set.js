/**
 * This is not set, set should be uniq, ordered, and normally use black-red tree!!!
 *
 * Set structure, items in the structure are unique, do not promise the order
 *
 * including size, add, del, has, each, isSuperSet, isSubSet, empty
 *
 * Created by bd on 8/19/14.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Set = factory();
  }
}(this, function() {

  function Set() {
    if (!(this instanceof Set)) return new Set();
    this._list = [];
  }

  var p = Set.prototype;

  /**
   * elements' count
   * @returns {Number}
   */
  p.size = function() {
    return this._list.length;
  };
  /**
   * add an item
   *
   * if already has, ignore
   *
   * @param item
   */
  p.add = function(item) {
    if (this._list.indexOf(item) === -1) {
      this._list.push(item);
    }

    return this;
  };
  /**
   * delete an item if exist
   *
   * @param item
   */
  p.del = function(item) {
    var inx = this._list.indexOf(item);
    if (inx !== -1) {
      this._list.splice(inx, 1);
    }

    return this;
  };
  /**
   * test if has an item
   *
   * @param item
   * @returns {boolean}
   */
  p.has = function(item) {
    // todo: if item is object, it might has problem
    // should use value pattern
    return this._list.indexOf(item) !== -1;
  },
  p.clone = function() {
    // todo: deep copy
    var set = new Set();
    this.each(function(item) {
      set.add(item);
    });

    return set;
  },
  /**
   * deal with each item in set
   *
   * @param {Function} fn the function which deal with each item, if return false, break the loop
   */
  p.each = function(fn) {
    for (var i = 0, l = this.size(); i < l; i++) {
      if (fn.call(this, this._list[i], i) === false) {
        break;
      }
    }

    return this;
  };
  /**
   * test if current set is a super set of another set
   *
   * @param {Set} aSet another set
   * @returns {boolean}
   */
  p.isSuperSet = function(aSet) {
    var self = this;
    var ret = true;

    aSet.each(function(item) {
      if (!self.has(item)) {
        ret = false;
        return false;
      }
    });

    return ret;
  };
  /**
   * test if current set is a sup set of another set
   *
   * @param {Set} aSet another set
   * @returns {boolean}
   */
  p.isSubSet = function(aSet) {
    var self = this;
    var ret = true;

    self.each(function(item) {
      if (!aSet.has(item)) {
        ret = false;
        return false;
      }
    });

    return ret;
  };
  /**
   * is equals to another set
   *
   * @param {Set} aSet another set
   * @returns {boolean}
   */
  p.equals = function(aSet) {
    if (this.size() != aSet.size()) return false;

    return this.isSuperSet(aSet) && this.isSubSet(aSet);
  };
  /**
   * return intersection with another set
   *
   * @param {Set} aSet another set
   * @returns {Set}
   */
  p.intersection = function(aSet) {
    var set = new Set();

    this.each(function(item) {
      if (aSet.has(item)) {
        set.add(item);
      }
    });

    return set;
  };
  /**
   * return union with another set
   *
   * @param {Set} aSet another set
   * @returns {Set}
   */
  p.union = function(aSet) {
    var set = new Set();

    this.each(function(item) {
      set.add(item);
    });

    aSet.each(function(item) {
      set.add(item);
    });

    return set;
  };
  /**
   * clear the container
   */
  p.clear = function() {
    this._list.length = 0;

    return this;
  };
  /**
   *
   * @returns {Array.<T>}
   */
  p.valueOf = function() {
    var _list = this._list.slice(0);
    return _list.sort();
  };


  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return Set;
}));
