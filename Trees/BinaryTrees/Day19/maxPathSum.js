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
 * Time - O(N)
 * Space - O(N)
 */
var maxPathSum = function (root) {
  let maxi = -Infinity;

  const solve = (root) => {
    if (root == null) return 0;

    let l = solve(root.left);
    if (l < 0) l = 0;
    let r = solve(root.right);
    if (r < 0) r = 0;
    maxi = Math.max(maxi, l + r + root.val);

    return root.val + Math.max(l, r);
  };

  solve(root);

  return maxi;
};
