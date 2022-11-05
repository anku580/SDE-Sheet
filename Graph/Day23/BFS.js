/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 * https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1
 * Time - O(N+E)
 * Space - O(N)
 */
class Solution {
  // Function to return Breadth First Traversal of given graph.
  bfsOfGraph(V, adj) {
    // code here
    const isVisited = new Array(V).fill(false);
    const ans = [];

    this.bfs(0, ans, adj, isVisited);

    return ans;
  }

  bfs(node, ans, adj, isVisited) {
    const queue = [node];
    isVisited[node] = true;

    while (queue.length) {
      const front = queue.shift();
      ans.push(front);

      for (let neigh of adj[front]) {
        if (!isVisited[neigh]) {
          isVisited[neigh] = true;
          queue.push(neigh);
        }
      }
    }
  }
}
