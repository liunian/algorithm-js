/**
 * Queue 是 FIFO 的数据结构，
 * enqueue 来添加一个元素，
 * dequeue 移除并返回首元素，如果为空则返回 null
 * size 返回队列长度，
 * isEmpty 判断是否是空
 *
 * 使用 for-of 来遍历
 *
 *
 * @constructor
 */
class Queue {
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

	has(item) {
		return this._list.includes(item);
	}

	enqueue(item) {
		if (arguments.length == 0) {
			throw new Error('enqueue expected an item');
		}

		this._list.push(item);
	}

	dequeue() {
		if (!this._list.length) {
			return null;
		}

		return this._list.splice(0, 1)[0];
	}

	isEmpty() {
		return !this._list.length;
	}

	size() {
		return this._list.length;
	}
}

module.exports = Queue;
