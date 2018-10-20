/**
 * 宽度优先搜索基于邻接表的图
 *
 * 适用于非加权图
 */

const Stack = require('./stack');

function bfs(graph, from, to) {
	if (!graph.hasVertex(from)) return null;

	const stack = new Stack();
	const visitedVertex = [];
	const targetSourceMap = {};

	stack.push(from);

	outer: while (!stack.isEmpty()) {
		let vertex = stack.pop();
		visitedVertex.push(vertex);

		let vertexList = graph.getRelatedEdges(vertex);
		for (let i = 0, l = vertexList.length; i < l; i++) {
			let v = vertexList[i];
			if (!visitedVertex.includes(v)) {
				targetSourceMap[v] = vertex;

				if (v === to) {
					break outer;
				}

				stack.push(v);
			}
		}
	}

	if (!targetSourceMap[to]) return null;

	const path = [to];
	let node = targetSourceMap[to];
	do {
		path.unshift(node);
		node = targetSourceMap[node];
	} while (node !== from);
	path.unshift(from);

	return path;
}

module.exports = bfs;
