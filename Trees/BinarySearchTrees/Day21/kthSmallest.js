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
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * Time - O(N)
 * Space - O(N)
 */
var kthSmallest = function (root, k) {
  let count = 0;
  let ans = -1;

  const solve = (root) => {
    if (root == null || count == k) return;

    solve(root.left);

    count += 1;

    if (k == count) {
      ans = root.val;
      return;
    }

    solve(root.right);
  };

  solve(root);

  return ans;
};
