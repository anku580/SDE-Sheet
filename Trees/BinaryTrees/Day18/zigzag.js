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
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * Time - O(N)
 * Space - O(N)
 */
var zigzagLevelOrder = function (root) {
  if (root == null) return [];
  const queue = [root];
  let levelCounter = 0;
  const ans = [];

  while (queue.length) {
    let size = queue.length;

    const level = new Array(size).fill(0);
    let idx = levelCounter % 2 == 1 ? size - 1 : 0;
    while (size--) {
      const front = queue.shift();

      level[idx] = front.val;
      if (levelCounter % 2 == 1) {
        idx--;
      } else {
        idx++;
      }
      if (front.left != null) queue.push(front.left);
      if (front.right != null) queue.push(front.right);
    }

    ans.push(level);
    levelCounter += 1;
  }

  return ans;
};
