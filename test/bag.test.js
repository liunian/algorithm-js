const assert = require('assert');
const Bag = require('../src/bag');

describe('Bag', () => {
	let bag;

	beforeEach(() => (bag = new Bag()));

	afterEach(() => (bag = null));

	describe('Bag#Bag', () => {
		it('instance of', () => {
			assert(bag instanceof Bag);
		});
	});

	describe('Bag#add', () => {
		it('add an item', () => {
			assert.equal(bag.size(), 0);
			const a = 1;
			bag.add(a);
			assert.equal(bag.size(), 1);
			let exist = false;
			for (let i of bag) {
				if (i === a) {
					exist = true;
				}
			}
			assert.ok(exist);
		});

		it('throw an error when add nothing', () => {
			assert.throws(bag.add);
		});
	});

	describe('Bag#isEmpty', () => {
		it('init bag is empty', () => {
			assert.ok(bag.isEmpty());
		});

		it('not empty', () => {
			bag.add(1);
			assert.equal(bag.isEmpty(), false);
		});
	});

	describe('Bag#size', () => {
		it('init size is 0', () => {
			assert.equal(bag.size(), 0);
		});

		it('size with 1 item is 1', () => {
			bag.add('a');
			assert.equal(bag.size(), 1);
		});
	});

	describe('Bag iterate', () => {
		it('test for-of', () => {
			const source = [1, '4', 7];
			source.forEach(i => bag.add(i));

			const ret = [];
			for (let i of bag) {
				ret.push(i);
			}

			assert.equal(ret.length, source.length);
			source.forEach(i => {
				assert.ok(ret.includes(i));
			});
		});

		it('for of empty bag', () => {
			let count = 0;

			for (let _ of bag) {
				count++;
			}

			assert.equal(count, 0);
		});
	});
});
