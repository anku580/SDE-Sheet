/**
 * @param {number} V
 * @param {number[][][]} Adj
 * @param {number} S
 * @return {number[]}
 * https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1
 * Time - O(N^2)
 * Space - O(N) + O(N) + O(N
 */
class Solution {
  //Function to find the shortest distance of all the vertices
  //from the source vertex S.
  dijkstra(V, Adj, S) {
    //code here
    const visited = new Array(V).fill(false);
    const distance = new Array(V).fill(Infinity);

    const queue = [[S, 0]];
    distance[S] = 0;

    while (queue.length) {
      const [node, dist] = queue.shift();
      visited[node] = true;
      for (let neighNode of Adj[node]) {
        const [neigh, neighD] = neighNode;

        if (visited[neigh]) continue;
        if (distance[neigh] > dist + neighD) {
          distance[neigh] = dist + neighD;
        }
      }

      const [newNode, newDist] = this.nextNode(visited, distance);
      if (newNode != -1) queue.push([newNode, newDist]);
    }

    return distance;
  }

  nextNode(visited, distance) {
    let node = -1;
    let minDis = +Infinity;
    for (let i = 0; i < visited.length; i++) {
      if (!visited[i] && distance[i] < minDis) {
        minDis = distance[i];
        node = i;
      }
    }

    return [node, minDis];
  }
}
