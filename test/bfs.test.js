const assert = require('assert');
const Graph = require('../src/adjListUndigraph');
const bfs = require('../src/bfs');

describe('BFS', () => {
	const vertices = ['North Gate', 'South Gate', 'Classroom', 'Square', 'Toilet', 'Canteen'];
	const edges = [
		['North Gate', 'Classroom'],
		['North Gate', 'Square'],
		['Classroom', 'Toilet'],
		['Square', 'Toilet'],
		['Square', 'Canteen'],
		['Toilet', 'South Gate'],
		['Canteen', 'South Gate']
	];

	const graph = new Graph(vertices, edges);

	it('minimum edge', () => {
		const northGate2Canteen = ['North Gate', 'Square', 'Canteen'];
		const classroom2SouthGate = ['Classroom', 'Toilet', 'South Gate'];

		assert.deepEqual(bfs(graph, 'North Gate', 'Canteen'), northGate2Canteen);
		assert.deepEqual(bfs(graph, 'Classroom', 'South Gate'), classroom2SouthGate);
	});

	it('return null if not valid start point', () => {
		assert.equal(bfs(graph, 'a', 'Square'), null);
	});

	it('return null if not valid target vertex', () => {
		assert.equal(bfs(graph, 'North Gate', 'b'), null);
	});
});
