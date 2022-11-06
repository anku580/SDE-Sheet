/**
 * @param {number[][]} arr
 * @param {number} v
 * @param {number} e
 * @returns {number}
 * https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1
 * Time - O(N*2)
 * Space - O(N)
 */
class Solution {
  spanningTree(arr, v, e) {
    // code here

    const adj = new Array(v).fill([]);

    for (let edge of arr) {
      const [u, v, wt] = edge;
      adj[parseInt(u)] = [...adj[parseInt(u)], [parseInt(v), parseInt(wt)]];
      adj[parseInt(v)] = [...adj[parseInt(v)], [parseInt(u), parseInt(wt)]];
    }

    const visited = new Array(v).fill(false);
    const distance = new Array(v).fill(Infinity);
    const S = 0;
    distance[S] = 0;

    for (let i = 0; i < v; i++) {
      const node = this.nextNode(visited, distance);
      visited[node] = true;
      for (let neighNode of adj[node]) {
        const [neigh, neighD] = neighNode;

        if (visited[neigh]) continue;
        if (distance[neigh] > neighD) {
          distance[neigh] = neighD;
        }
      }
    }

    let minWt = 0;
    for (let i = 0; i < v; i++) {
      minWt += parseInt(distance[i]);
    }

    return minWt;
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

    return node;
  }
}
