/**
 * https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 * Time - O(N + E)
 * Space - O(N) + O(N)
 */
class Solution {
  // Function to return a list containing the DFS traversal of the graph.
  dfsOfGraph(V, adj) {
    // code here
    const ans = [];
    const isVisited = new Array(V).fill(false);

    for (let i = 0; i < V; i++) {
      if (!isVisited[i]) {
        this.dfs(i, adj, isVisited, ans);
      }
    }

    return ans;
  }

  dfs(node, adj, isVisited, ans) {
    isVisited[node] = true;
    ans.push(node);

    for (let neigh of adj[node]) {
      if (!isVisited[neigh]) {
        this.dfs(neigh, adj, isVisited, ans);
      }
    }
  }
}
