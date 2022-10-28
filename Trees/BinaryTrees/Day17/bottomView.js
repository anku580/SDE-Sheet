/**
 * @param {Node} root
 * @returns {number[]}
 * https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1
 * Time - O(N)
 * Space - O(N)
 */

class Solution {
  //Function to return a list containing the bottom view of the given tree.
  bottomView(root) {
    //your code here
    if (root == null) return [];

    const queue = [[root, 0]];
    const map = new Map();
    const ans = [];
    let minKeys = Infinity,
      maxKeys = -Infinity;

    while (queue.length) {
      const [frontNode, HD] = queue.shift();
      map.set(HD, frontNode.data);

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
