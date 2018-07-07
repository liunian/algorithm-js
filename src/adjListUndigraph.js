/**
 * 基于邻接表的无向非加权图
 *
 */
class AdjListUndigraph {
	constructor(vertices = [], edges = []) {
		// 邻接表
		this.adjList = new Map();

		vertices.forEach(this.addVertex.bind(this));
		edges.forEach(this.addEdge.bind(this));
	}

	/**
	 * @returns {IterableIterator<any>}
	 */
	getVertexes() {
		return this.adjList.keys();
	}

	getVertexesAsList() {
		const list = [];
		for (let vertex of this.getVertexes()) {
			list.push(vertex);
		}
		return list;
	}

	hasVertex(vertex) {
		return this.adjList.has(vertex);
	}

	getRelatedEdges(vertex) {
		return this.adjList.get(vertex) || [];
	}

	/**
	 * 添加顶点
	 * @param {string} vertex
	 */
	addVertex(vertex) {
		this.adjList.set(vertex, []);
	}

	/**
	 * 添加边
	 * @param {Array} edge 边，两个元素，分别是两个顶点
	 */
	addEdge(edge) {
		if (!edge || edge.length !== 2) {
			throw new Error('edge should be an array with two vertexes');
		}
		const v0 = edge[0];
		const v1 = edge[1];

		if (!this.hasVertex(v0)) {
			this.addVertex(v0);
		}

		if (!this.hasVertex(v1)) {
			this.addVertex(v1);
		}

		if (!this.getRelatedEdges(v0).includes(v1)) this.getRelatedEdges(v0).push(v1);
		if (!this.getRelatedEdges(v1).includes(v0)) this.getRelatedEdges(v1).push(v0);
	}
}

module.exports = AdjListUndigraph;
