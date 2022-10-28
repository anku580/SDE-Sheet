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
 * https://leetcode.com/problems/maximum-width-of-binary-tree/
 * Time - O(N)
 * Space - O(N)
 */
var widthOfBinaryTree = function (root) {
  if (root == null) return 0;

  let maxWidth = 1;
  const queue = [[root, 1]];

  while (queue.length) {
    let size = queue.length;
    //To prevent integer overflow
    let currmin = queue[0][1];
    while (size--) {
      const [front, idx] = queue.shift();

      if (front.left != null) {
        queue.push([front.left, 2 * (idx - currmin)]);
      }
      if (front.right != null) {
        queue.push([front.right, 2 * (idx - currmin) + 1]);
      }
    }

    if (queue.length) {
      const currWidth = queue[queue.length - 1][1] - queue[0][1] + 1;
      maxWidth = Math.max(maxWidth, currWidth);
    }
  }

  return maxWidth;
};
