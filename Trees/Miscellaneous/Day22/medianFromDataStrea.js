//https://leetcode.com/problems/find-median-from-data-stream/
//Time - O(n*log(n))
//Space - O(n)
let h1, h2;
var MedianFinder = function () {
  h1 = new MaxPriorityQueue();
  h2 = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (h1.size() <= h2.size()) {
    h1.enqueue(num);
  } else {
    h2.enqueue(num);
  }

  const ele1 = h1.front().element;
  const ele2 = h2.size() ? h2.front().element : Infinity;

  if (ele1 > ele2) {
    h1.dequeue();
    h2.dequeue();
    h1.enqueue(ele2);
    h2.enqueue(ele1);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const s1 = h1.size();
  const s2 = h2.size();
  if ((s1 + s2) % 2 == 0) {
    return (h1.front().element + h2.front().element) / 2;
  } else return h1.front().element;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
