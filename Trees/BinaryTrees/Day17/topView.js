/**
 * @param {Node} root
 * https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1
 * Time - O(N)
 * Space - O(N)
 */
/**
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  //Function to return a list of nodes visible from the top view
  //from left to right in Binary Tree.
  topView(root) {
    //your code here
    if (root == null) return [];

    const queue = [[root, 0]];
    const map = new Map();
    const ans = [];
    let minKeys = Infinity,
      maxKeys = -Infinity;

    while (queue.length) {
      const [frontNode, HD] = queue.shift();
      if (!map.has(HD)) map.set(HD, frontNode.data);

      if (HD > maxKeys) {
        maxKeys = HD;
      }
      if (HD < minKeys) {
        minKeys = HD;
      }

      if (frontNode.left != null) {
        queue.push([frontNode.left, HD - 1]);
      }

      if (frontNode.right != null) {
        queue.push([frontNode.right, HD + 1]);
      }
    }

    for (let i = minKeys; i <= maxKeys; i++) {
      ans.push(map.get(i));
    }

    return ans;
  }
}
