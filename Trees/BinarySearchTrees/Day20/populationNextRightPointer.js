/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 * @param {Node} root
 * @return {Node}
 * Time - O(N)
 * Space - O(N)
 */
var connect = function (root) {
  if (root == null) return null;
  const queue = [root];
  let prev = null;

  while (queue.length) {
    let size = queue.length;
    prev = null;
    while (size--) {
      const front = queue.shift();

      if (front.left != null) queue.push(front.left);
      if (front.right != null) queue.push(front.right);

      if (prev != null) {
        prev.next = front;
      }
      prev = front;
    }

    if (prev != null) {
      prev.next = null;
    }
  }

  return root;
};
