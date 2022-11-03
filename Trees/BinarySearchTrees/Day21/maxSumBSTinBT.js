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
 * @return {number}
 * https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/
 * Time - O(N)
 * Space - O(h)
 */

class CustomNode {
  constructor(smallest, largest, sum) {
    this.largest = largest;
    this.smallest = smallest;
    this.sum = sum || 0;
  }
}
var maxSumBST = function (root) {
  let maxSum = 0;

  const solve = (root) => {
    if (root == null) {
      return new CustomNode(Infinity, -Infinity);
    }

    const l = solve(root.left);
    const r = solve(root.right);

    if (root.val > l.largest && root.val < r.smallest) {
      //valid BST
      maxSum = Math.max(maxSum, root.val + l.sum + r.sum);
      return new CustomNode(
        Math.min(root.val, l.smallest),
        Math.max(root.val, r.largest),
        root.val + l.sum + r.sum
      );
    }

    return new CustomNode(
      -Infinity,
      Infinity,
      Math.max(l.sum, r.sum, root.val)
    );
  };

  solve(root);
  return maxSum;
};
