/**
 * 基于邻接表的无向图
 *
 */
class AdjListUndigraph {
  constructor(vertexs = [], edges = []) {
    // 邻接表
    this.adjList = new Map();

    vertexs.forEach(this.addVertex.bind(this));
    edges.forEach(this.addEdge.bind(this));
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
    const v0 = edge[0];
    const v1 = edge[1];

    if (!this.adjList.get(v0).includes(v1)) this.adjList.get(v0).push(v1);
    if (!this.adjList.get(v1).includes(v0)) this.adjList.get(v1).push(v0);
  }
}

module.exports = AdjListUndigraph;