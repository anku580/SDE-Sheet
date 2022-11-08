/**
 * @param {Job[]} arr
 * @param {number} n
 * @returns {number[]}
 * https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1
 * Time - O(N^2)
 * Space - O(N^2) + recursive
 * Giving TLE
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
    arr.sort((a, b) => a.dead - b.dead);
    let dp = [];
    for (let i = 0; i < n; i++) dp.push(new Map());
    let ans = this.solve(0, 1, n, arr, dp);

    return [ans.jobs, ans.profit];
  }

  solve = (index, timer, n, arr, dp) => {
    if (index == n) return { jobs: 0, profit: 0 };
    let pick = { jobs: 0, profit: 0 };

    if (dp[index].has(timer)) return dp[index].get(timer);

    if (arr[index].dead >= timer) {
      pick = this.solve(index + 1, timer + 1, n, arr, dp);
      pick.profit += arr[index].profit;
      pick.jobs += 1;
    }

    let notPick = this.solve(index + 1, timer, n, arr, dp);

    if (pick.profit > notPick.profit) {
      dp[index].set(pick);
      return pick;
    }

    dp[index].set(notPick);
    return notPick;
  };
}

//Using Greedy

/**
 * @param {Job[]} arr
 * @param {number} n
 * @returns {number[]}
 * Time - O(N*log(N))
 * Space - O(N)
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

    for (let a of arr) {
      const { id, dead, profit } = a;

      maxDeadline = Math.max(maxDeadline, dead);
    }

    let maxProfit = new Array(maxDeadline + 1).fill(-1);
    let count = 0;
    let maxP = 0;

    for (let i = 0; i < n; i++) {
      const { id, dead, profit } = arr[i];

      if (maxProfit[dead] == -1) {
        maxProfit[dead] = profit;
      } else {
        let j = dead - 1;
        while (j >= 1 && maxProfit[j] != -1) {
          j -= 1;
        }

        if (j < 1) continue;
        maxProfit[j] = profit;
      }

      count += 1;
      maxP += profit;
    }

    return [count, maxP];
  }
}
