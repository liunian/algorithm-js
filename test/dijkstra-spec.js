const assert = require('assert');
const Graph = require('../src/dwg');
const findPath = require('../src/dijkstra');

describe('dijkstra', () => {
  it('minimum distance', () => {
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

    assert.deepEqual(findPath(graph, 'A', 'F'), { distance: 35, path: ['A', 'B', 'E', 'F'] });
  });
});