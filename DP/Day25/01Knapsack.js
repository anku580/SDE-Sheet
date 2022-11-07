/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
 * https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1
 * Time - O(N*W)
 * Space - O(N*W) + recursive space O(N)
 */

class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // code here
    const dp = [];
    for (let i = 0; i < n; i++) {
      dp.push(new Array(W + 1).fill(-1));
    }
    return this.solve(0, n, W, wt, val, dp);
  }

  solve = (index, n, capacity, wt, val, dp) => {
    //last index
    if (index == n - 1) {
      if (wt[index] <= capacity) {
        return val[index];
      } else return 0;
    }

    if (dp[index][capacity] != -1) return dp[index][capacity];

    //pick
    let pick = 0;
    if (capacity - wt[index] >= 0) {
      pick =
        val[index] +
        this.solve(index + 1, n, capacity - wt[index], wt, val, dp);
    }

    let notPick = this.solve(index + 1, n, capacity, wt, val, dp);

    return (dp[index][capacity] = Math.max(pick, notPick));
  };
}

//iterative
/*
 * https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1
 * Time - O(N*W)
 * Space - O(N*W)
 */

class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // code here
    const dp = [];
    for (let i = 0; i < n; i++) {
      dp.push(new Array(W + 1).fill(0));
    }

    //last row
    for (let capacity = 0; capacity <= W; capacity++) {
      if (wt[n - 1] <= capacity) {
        dp[n - 1][capacity] = val[n - 1];
      }
    }

    for (let index = n - 2; index >= 0; index--) {
      for (let capacity = 0; capacity <= W; capacity++) {
        //pick
        let pick = 0;
        if (capacity - wt[index] >= 0) {
          pick = val[index] + dp[index + 1][capacity - wt[index]];
        }

        let notPick = dp[index + 1][capacity];

        dp[index][capacity] = Math.max(pick, notPick);
      }
    }

    return dp[0][W];
  }
}
