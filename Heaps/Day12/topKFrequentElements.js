/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * Time - O(n*log(n))
 * Space - O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let maxHeap = new MaxPriorityQueue();
  let hmap = {};

  for (let n of nums) {
    const exist = hmap[n] || 0;
    hmap[n] = exist + 1;
  }

  Object.keys(hmap).forEach((key) => {
    let number = key;
    let freq = hmap[key];

    maxHeap.enqueue(number, freq);
  });

  return maxHeap
    .toArray()
    .map((el) => el.element)
    .slice(0, k);
};
