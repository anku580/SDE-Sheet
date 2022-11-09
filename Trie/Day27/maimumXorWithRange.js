/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 * https://leetcode.com/problems/maximum-xor-with-an-element-from-array
 */
// Failing last test case because of memory
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

  contains(key) {
    if (this.children[key]) return true;
    return false;
  }
}

const insertNum = (num, root) => {
  let curr = root;

  for (let i = 31; i >= 0; i--) {
    const bit = (num >> i) & 1;
    if (!curr.contains(bit)) {
      curr.insert(bit);
    }
    curr = curr.getNode(bit);
  }
};

const maxProd = (num, root) => {
  let maxAns = 0;
  let curr = root;

  for (let i = 31; i >= 0; i--) {
    const bit = (num >> i) & 1;
    const opp = 1 - bit;
    if (curr.contains(opp)) {
      maxAns = maxAns | (1 << i);
      curr = curr.getNode(opp);
    } else {
      curr = curr.getNode(bit);
    }
  }

  return maxAns;
};

var maximizeXor = function (nums, queries) {
  const ans = new Array(queries.length).fill(-1);
  for (let i = 0; i < queries.length; i++) {
    queries[i].push(i);
  }
  //Qlog(Q)
  queries.sort((a, b) => a[1] - b[1]);
  nums.sort((a, b) => a - b);
  let i = 0;
  let root = new TrieNode();
  let n = nums.length;

  //(Q*32 + N*32)
  for (let q of queries) {
    const [num, maxRange, idx] = q;

    while (i < n && nums[i] <= maxRange) {
      insertNum(nums[i], root);
      i += 1;
    }

    if (i == 0) ans[idx] = -1;
    else ans[idx] = maxProd(num, root);
  }

  return ans;
};
