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
class Bag {
	constructor() {
		this._list = [];
		this._index = 0;
	}

	// use iterator and next to make it iterable
	[Symbol.iterator]() {
		return this;
	}

	next() {
		if (this._index >= this._list.length) {
			this._index = 0;
			return { done: true, value: this._list[this._index] };
		}

		return { done: false, value: this._list[this._index++] };
	}

	add(item) {
		if (arguments.length === 0) {
			throw new Error('Expected an item');
		}

		this._list.push(item);
	}

	isEmpty() {
		return !this._list.length;
	}

	size() {
		return this._list.length;
	}
}

module.exports = Bag;
