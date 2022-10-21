// https://leetcode.com/problems/find-median-from-data-stream/
// Time - O(log(n))
// Space - O(n)

let heap1, heap2;
var MedianFinder = function () {
  heap1 = new MaxPriorityQueue();
  heap2 = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let h1 = heap1.size(),
    h2 = heap2.size();

  if (h1 > h2) {
    heap2.enqueue(num);
  } else heap1.enqueue(num);

  //check whether the elements are in correct heap or not
  let firstEle = heap1.front()?.element || 0,
    secondEle = heap2.front()?.element || 0;

  if (firstEle > secondEle && h2 != 0) {
    heap1.dequeue();
    heap2.dequeue();

    heap1.enqueue(secondEle);
    heap2.enqueue(firstEle);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let h1 = heap1.size(),
    h2 = heap2.size();
  //console.log(h1, h2)
  //odd
  if ((h1 + h2) % 2) {
    return heap1.front().element;
  } else {
    return (heap1.front().element + heap2.front().element) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
