/**
 * @param {number[][]} graph
 * @return {boolean}
 * https://leetcode.com/problems/is-graph-bipartite/description/
 * Time - O(N+E)
 * Space - O(N)
 */
var isBipartite = function (graph) {
  const nodes = graph.length;
  const assgColors = new Array(nodes).fill(-1);

  for (let i = 0; i < nodes; i++) {
    if (assgColors[i] == -1) {
      if (!bfs(i, graph, assgColors, 0)) return false;
    }
  }

  return true;
};

const bfs = (node, graph, assgColors, color) => {
  const queue = [node];
  assgColors[node] = color;

  while (queue.length) {
    const front = queue.shift();
    for (let neigh of graph[front]) {
      if (assgColors[neigh] == -1) {
        assgColors[neigh] = assgColors[front] == 0 ? 1 : 0;
        queue.push(neigh);
      } else if (assgColors[neigh] == assgColors[front]) {
        return false;
      }
    }
  }

  return true;
};
