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
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * Time - O(N)
 * Space - O(N)
 */
var diameterOfBinaryTree = function (root) {
  if (root == null) return 0;
  let dia = 0;

  const solve = (root, height = 0) => {
    if (root == null) return 0;

    const l = solve(root.left, height + 1);
    const r = solve(root.right, height + 1);

    dia = Math.max(dia, l + r);

    return 1 + Math.max(l, r);
  };

  solve(root);

  return dia;
};
