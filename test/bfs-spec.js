const assert = require('assert');
const Graph = require('../src/adjListUndigraph');
const bfsSpec = require('../src/bfs');

describe('BFS', () => {
  it('minimum edge', () => {
    const vertices = ["North Gate", "South Gate", "Classroom", "Square", "Toilet", "Canteen"];
    const edges = [
      ["North Gate", "Classroom"],
      ["North Gate", "Square"],
      ["Classroom", "Toilet"],
      ["Square", "Toilet"],
      ["Square", "Canteen"],
      ["Toilet", "South Gate"],
      ["Canteen", "South Gate"]
    ];

    const graph = new Graph(vertices, edges);

    const northGate2Canteen = ['North Gate', 'Square', 'Canteen'];
    const classroom2SouthGate = ['Classroom', 'Toilet', 'South Gate'];

    assert.deepEqual(bfsSpec(graph, 'North Gate', 'Canteen'), northGate2Canteen);
    assert.deepEqual(bfsSpec(graph, 'Classroom', 'South Gate'), classroom2SouthGate);
  });
});