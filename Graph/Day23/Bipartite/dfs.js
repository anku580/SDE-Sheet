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
      if (!dfs(i, graph, assgColors, 0)) return false;
    }
  }

  return true;
};

const dfs = (node, graph, assgColors, color) => {
  assgColors[node] = color;

  for (let neigh of graph[node]) {
    if (assgColors[neigh] == -1) {
      const oppColor = color == 0 ? 1 : 0;
      if (!dfs(neigh, graph, assgColors, oppColor)) return false;
    } else {
      if (assgColors[neigh] == assgColors[node]) return false;
    }
  }

  return true;
};
