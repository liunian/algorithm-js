/**
 * 宽度优先搜索基于邻接表的图
 */

const Stack = require('./stack');

function bfs(graph, from, to) {
  const adjList = graph.adjList;

  const queue = new Stack();
  const visitedVertex = [];
  const targetSourceMap = {};

  queue.push(from);

  outer:
  while (queue.size() > 0) {
    let vertex = queue.pop();
    visitedVertex.push(vertex);

    if (adjList.has(vertex)) {
      let vertexList = adjList.get(vertex);
      for (let i = 0, l = vertexList.length; i < l; i++) {
        let v = vertexList[i];
        if (!visitedVertex.includes(v)) {
          targetSourceMap[v] = vertex;

          if (v === to) {
            break outer;
          }

          queue.push(v);
        }
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