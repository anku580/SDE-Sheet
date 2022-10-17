/**
 * https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1
 * @param {number} W
 * @param {Item[]} arr
 * @param {number} n
 * @returns {number}
 * Time - O(nlogn) + o(n)
 * Space - O(1)
 */

/*
class Item{
    constructor(value, weight){
        this.value = value;
        this.weight = weight;
    }
}
*/

class Solution {
  //Function to get the maximum total value in the knapsack.
  fractionalKnapsack(W, arr, n) {
    // code here
    arr.sort((a, b) => {
      const vperwtA = a.value / a.weight;
      const vperwtB = b.value / b.weight;

      return vperwtB - vperwtA;
    });
    let maxProfit = 0;
    let itr = 0;
    while (W > 0 && itr < n) {
      const value = arr[itr].value;
      const weight = arr[itr].weight;
      if (W >= weight) {
        maxProfit += value;
        W -= weight;
      } else {
        const vperwt = value / weight;
        maxProfit += W * vperwt;
        W = 0;
      }
      itr++;
    }

    return maxProfit;
  }
}
