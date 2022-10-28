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
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 * Time -
 * Space - O(N)
 */
var verticalTraversal = function (root) {
  if (root == null) return [];

  const map = new Map();
  const ans = [];
  const queue = [[root, 0]];
  let minKeys = +Infinity,
    maxKeys = -Infinity;

  while (queue.length) {
    let size = queue.length;
    const hmap = {};
    while (size--) {
      const [node, HD] = queue.shift();
      const value = hmap[HD] || [];
      value.push(node.val);
      value.sort((a, b) => a - b);
      hmap[HD] = value;
      if (HD > maxKeys) {
        maxKeys = HD;
      }
      if (HD < minKeys) {
        minKeys = HD;
      }

      if (node.left != null) {
        queue.push([node.left, HD - 1]);
      }

      if (node.right != null) {
        queue.push([node.right, HD + 1]);
      }
    }

    Object.keys(hmap).forEach((HD) => {
      if (map.has(HD)) {
        let list = map.get(HD);
        list = [...list, ...hmap[HD]];
        map.set(HD, list);
      } else {
        map.set(HD, [...hmap[HD]]);
      }
    });
  }

  for (let i = minKeys; i <= maxKeys; i++) {
    ans.push(map.get(i.toString()));
  }

  return ans;
};
