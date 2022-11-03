/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * Time - O(N)
 * Space - O(N)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root == null) return "";
  let string = "";
  const queue = [root];
  string += root.val + " ";

  while (queue.length) {
    let size = queue.length;

    while (size--) {
      const front = queue.shift();

      if (front.left != null) {
        queue.push(front.left);
        string += front.left.val + " ";
      } else {
        string += "$" + " ";
      }

      if (front.right != null) {
        queue.push(front.right);
        string += front.right.val + " ";
      } else {
        string += "$" + " ";
      }
    }
  }

  return string;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data == "") return null;

  data = data.split(" ");
  let root = new TreeNode(data[0]);
  let i = 1;
  const queue = [root];

  while (queue.length) {
    let size = queue.length;

    while (size--) {
      const front = queue.shift();

      if (data[i] != "$") {
        front.left = new TreeNode(data[i]);
        queue.push(front.left);
      } else {
        front.left = null;
      }

      i += 1;

      if (data[i] != "$") {
        front.right = new TreeNode(data[i]);
        queue.push(front.right);
      } else {
        front.right = null;
      }

      i += 1;
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
