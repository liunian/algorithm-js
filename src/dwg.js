/**
 * 有向加权图
 */

class DirectedWeightGraph {
	constructor(vertices = [], edges = []) {
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

	addVertex(vertex) {
		this.adjList.set(vertex, []);
	}

	/**
	 * @param {Array} edge 数据有三个元素，第一个是起点，第二个是终点，第三个是权重
	 */
	addEdge(edge) {
		if (!edge || edge.length !== 3) {
			throw new Error('edge should be an array with two vertexes and the weight');
		}
		const v0 = edge[0];
		const v1 = edge[1];
		const weight = edge[2];

		if (!this.hasVertex(v0)) {
			this.addVertex(v0);
		}

		if (!this.hasVertex(v1)) {
			this.addVertex(v1);
		}

		let relatedEdges = this.getRelatedEdges(v0);
		const existEdge = relatedEdges.find(e => e[0] === v1);
		if (existEdge) {
			existEdge[1] = weight;
		} else {
			relatedEdges.push([v1, weight]);
		}
	}
}

module.exports = DirectedWeightGraph;
