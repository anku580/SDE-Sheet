/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Time - O(N)
 * Space - O(N)
 */
var levelOrder = function (root) {
  if (root == null) return [];

  const ans = [];
  const queue = [root];

  while (queue.length) {
    let size = queue.length;
    const level = [];
    while (size--) {
      const front = queue.shift();
      level.push(front.val);
      if (front.left != null) {
        queue.push(front.left);
      }
      if (front.right != null) {
        queue.push(front.right);
      }
    }
    ans.push(level);
  }

  return ans;
};
