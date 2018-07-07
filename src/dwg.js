/**
 * 有向加权图
 */

class DirectedWeightGraph {
	constructor(vertices, edges) {
		this.adjList = new Map();

		vertices.forEach(this.addVertex.bind(this));
		edges.forEach(this.addEdge.bind(this));
	}

	addVertex(vertex) {
		this.adjList.set(vertex, []);
	}

	/**
	 * @param {Array} edge 数据有三个元素，第一个是起点，第二个是终点，第三个是权重
	 */
	addEdge(edge) {
		this.adjList.get(edge[0]).push([edge[1], edge[2]]);
	}
}

module.exports = DirectedWeightGraph;
