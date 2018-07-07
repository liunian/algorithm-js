/**
 * Stack 是个 LIFO 的数据结构
 *
 * push: 入栈，不提供参数时抛出 Error
 * top: 访问站定元素，空时返回 null
 * pop: 出栈，空时返回 null
 * isEmpty: 是否为空
 * size: 栈大小
 *
 * Created by bd on 16/3/23.
 */
class Stack {
	constructor() {
		this._list = [];
	}

	push(item) {
		if (arguments.length === 0) {
			throw new Error('push expects an item');
		}

		this._list.push(item);
	}

	top() {
		if (!this._list.length) {
			return null;
		}

		return this._list[this._list.length - 1];
	}

	pop() {
		var top = this.top();

		if (top !== null) {
			this._list.splice(this._list.length - 1);
		}

		return top;
	}

	isEmpty() {
		return !this._list.length;
	}

	size() {
		return this._list.length;
	}
}

module.exports = Stack;
