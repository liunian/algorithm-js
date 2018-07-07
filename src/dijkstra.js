/**
 * Dijkstra 算法，适用于有向正加权图
 */

const Queue = require('./queue');

function dijkstra(graph, from, to) {
	const adjList = graph.adjList;

	if (!graph.hasVertex(from)) return null;

	const queue = new Queue();
	const distance = {};
	for (let vertex of graph.getVertexes()) {
		distance[vertex] = Infinity;
	}
	distance[from] = 0;

	const targetSourceMap = {};

	queue.enqueue(from);
	while (!queue.isEmpty()) {
		let vertex = queue.dequeue();
		graph.getRelatedEdges(vertex).forEach(edge => {
			const newDistance = distance[vertex] + edge[1];
			const target = edge[0];
			if (!queue.has(target)) {
				queue.enqueue(target);
			}
			if (newDistance < distance[target]) {
				distance[target] = newDistance;
				targetSourceMap[target] = vertex;
			}
		});
	}

	let vertex = targetSourceMap[to];

	if (!vertex) return null;

	const path = [to];
	do {
		path.unshift(vertex);
		vertex = targetSourceMap[vertex];
	} while (vertex !== from);
	path.unshift(from);

	return {
		distance: distance[to],
		path: path
	};
}

module.exports = dijkstra;
