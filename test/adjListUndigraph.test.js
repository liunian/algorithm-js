const assert = require('assert');
const AdjListUndigraph = require('../src/adjListUndigraph');

describe('adjListUndigraph', () => {
	let graph;

	beforeEach(() => {
		graph = new AdjListUndigraph();
	});

	afterEach(() => {
		graph = null;
	});

	it('adjList is Map', () => {
		assert.ok(graph.adjList instanceof Map);
	});

	it('constructor', () => {
		graph = new AdjListUndigraph(['a', 'b', 'c'], [['a', 'b'], ['a', 'c']]);
		assert.deepStrictEqual(graph.getVertexesAsList(), ['a', 'b', 'c']);
		assert.deepStrictEqual(graph.getRelatedEdges('a'), ['b', 'c']);
		assert.deepStrictEqual(graph.getRelatedEdges('b'), ['a']);
		assert.deepStrictEqual(graph.getRelatedEdges('c'), ['a']);
	});

	describe('hasVertex', () => {
		it('no such vertex when empty', () => {
			assert.ok(!graph.hasVertex('a'));
		});

		it('has vertex when add into graph', () => {
			graph.addVertex('a');
			assert.ok(graph.hasVertex('a'));
		});
	});

	describe('getRelatedEdges', () => {
		it('empty edges for non exist vertex', () => {
			assert.deepStrictEqual(graph.getRelatedEdges('a'), []);
		});
	});

	describe('getVertexesAsList', () => {
		it('empty vertex list when graph empty', () => {
			assert.deepStrictEqual(graph.getVertexesAsList(), []);
		});

		it('test vertex list', () => {
			graph = new AdjListUndigraph(['a', 'b', 'c'], [['a', 'b'], ['a', 'c']]);
			assert.deepStrictEqual(graph.getVertexesAsList(), ['a', 'b', 'c']);
		});
	});

	describe('addVertex', () => {
		it('no such vertex', () => {
			assert.ok(!graph.adjList.has('a'));
		});

		it('empty edge when first add vertex', () => {
			graph.addVertex('a');
			assert.deepStrictEqual(graph.getRelatedEdges('a'), []);
		});
	});

	describe('addEdge', () => {
		it('addEdge with exist vertex', () => {
			graph.addVertex('a');
			graph.addVertex('b');
			graph.addEdge(['a', 'b']);
			assert.deepStrictEqual(graph.getRelatedEdges('a'), ['b']);
			assert.deepStrictEqual(graph.getRelatedEdges('b'), ['a']);
		});

		it('addEdge without exist vertex', () => {
			graph.addEdge(['a', 'b']);
			assert.deepStrictEqual(graph.getRelatedEdges('a'), ['b']);
			assert.deepStrictEqual(graph.getRelatedEdges('b'), ['a']);
		});

		it('add duplicate edge', () => {
			graph.addEdge(['a', 'b']);
			graph.addEdge(['a', 'b']);
			assert.deepStrictEqual(graph.getRelatedEdges('a'), ['b']);
			assert.deepStrictEqual(graph.getRelatedEdges('b'), ['a']);
		});

		it('addEdge without edge info', () => {
			assert.throws(() => {
				graph.addEdge();
			});
		});

		it('add invalid edge', () => {
			assert.throws(() => {
				graph.addEdge(['c']);
			});
		});
	});
});
