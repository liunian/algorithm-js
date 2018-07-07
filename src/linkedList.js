/**
 * Double linked list
 */

const Node = require('./node');

class LinkedList {
	constructor() {
		this._first = null;
		this._last = null;
		this._count = 0;
		this._iter = null;
	}

	// use iterator and next to make it iterable
	[Symbol.iterator]() {
		return this;
	}

	next() {
		if (!this._iter) {
			this._iter = this._first;
			return { done: true, value: null };
		}

		const value = this._iter.value;
		this._iter = this._iter.next;
		return { done: false, value: value };
	}

	push(item) {
		const node = new Node();
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
	}

	pop() {
		let top = this._first;

		if (!top) {
			return null;
		}

		const value = top.value;
		this._first = this._first.next;
		this._iter = this._first;
		top = null;
		this._count--;

		return value;
	}

	first() {
		return this._first ? this._first.value : null;
	}

	last() {
		return this._last ? this._last.value : null;
	}

	size() {
		return this._count;
	}
}

module.exports = LinkedList;
