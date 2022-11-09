/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/description/
 * Time - O(N*32) + O(N*32)
 */
class TrieNode {
  constructor() {
    this.children = new Array(2);
  }

  insert(key) {
    this.children[key] = new TrieNode();
  }

  getNode(key) {
    return this.children[key];
  }

  containsKey(key) {
    if (this.children[key]) return true;
    return false;
  }
}

const insertNum = (num, root) => {
  //insert 32 bits starting from left to right
  let curr = root;
  for (let i = 31; i >= 0; i--) {
    const bit = (num >> i) & 1;
    if (!curr.containsKey(bit)) {
      curr.insert(bit);
    }
    curr = curr.getNode(bit);
  }
};

const getMaxProd = (root, num) => {
  let ans = 0;
  let curr = root;

  for (let i = 31; i >= 0; i--) {
    const bit = (num >> i) & 1;
    const opp = 1 - bit;
    if (curr.containsKey(opp)) {
      ans = ans | (1 << i);
      curr = curr.getNode(opp);
    } else {
      curr = curr.getNode(bit);
    }
  }

  return ans;
};

var findMaximumXOR = function (nums) {
  let root = new TrieNode();
  for (let n of nums) {
    insertNum(n, root);
  }

  let maxAns = 0;
  for (let i = 0; i < nums.length; i++) {
    maxAns = Math.max(maxAns, getMaxProd(root, nums[i]));
  }

  return maxAns;
};
