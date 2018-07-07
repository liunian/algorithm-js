const assert = require('assert');
const Graph = require('../src/dwg');
const findPath = require('../src/dijkstra');

describe('dijkstra', () => {
	const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
	const edges = [
		['A', 'B', 5],
		['A', 'D', 0],
		['B', 'C', 15],
		['B', 'E', 20],
		['C', 'F', 20],
		['D', 'C', 30],
		['D', 'E', 35],
		['E', 'F', 10]
	];

	const graph = new Graph(vertices, edges);

	it('minimum distance', () => {
		assert.deepEqual(findPath(graph, 'A', 'F'), { distance: 35, path: ['A', 'B', 'E', 'F'] });
	});

	it('return null if not valid start point', () => {
		assert.equal(findPath(graph, 'a', 'F'), null);
	});

	it('return null if not valid target vertex', () => {
		assert.equal(findPath(graph, 'A', 'b'), null);
	});
});
