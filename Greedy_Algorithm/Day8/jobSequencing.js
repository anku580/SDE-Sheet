/**
 * https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#
 * @param {Job[]} arr
 * @param {number} n
 * @returns {number[]}
 * Time - O(nlogn) + O(n*m) where m is maxdeadline
 * Space - O(m)
 */

/*
class Job{
    constructor(id, dead, profit){
        this.id = id;
        this.dead = dead;
        this.profit = profit;
    }
}
*/

class Solution {
  //Function to find the maximum profit and the number of jobs done.
  JobScheduling(arr, n) {
    // code here
    arr.sort((a, b) => b.profit - a.profit);
    let maxDeadline = 0;

    for (let i = 0; i < n; i++) {
      maxDeadline = Math.max(maxDeadline, arr[i].dead);
    }

    const maxProfit = new Array(maxDeadline).fill(-1);
    let jobsDone = 0;
    let totalProfit = 0;

    for (let i = 0; i < n; i++) {
      const deadline = arr[i].dead;
      const profit = arr[i].profit;

      if (maxProfit[deadline - 1] == -1) {
        maxProfit[deadline - 1] = profit;
      } else {
        let i = deadline - 1;
        while (i >= 0 && maxProfit[i] != -1) {
          i--;
        }
        if (i < 0) continue;
        maxProfit[i] = profit;
      }
      jobsDone += 1;
      totalProfit += profit;
    }

    return [jobsDone, totalProfit];
  }
}
