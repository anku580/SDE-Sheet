/**
 * @param {number} k
 * @param {number[]} nums
 */
let minHeap, newK;
var KthLargest = function (k, nums) {
  minHeap = new MinPriorityQueue();
  newK = k;
  for (let n of nums) {
    minHeap.enqueue(n);

    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }
};

/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * @param {number} val
 * @return {number}
 * Time - O(n*log(k))
 * Space - O(K)
 */
KthLargest.prototype.add = function (val) {
  minHeap.enqueue(val);

  if (minHeap.size() > newK) minHeap.dequeue();

  return minHeap.front()?.element;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
