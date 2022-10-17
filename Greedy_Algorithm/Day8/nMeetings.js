//User function Template for javascript

/**
 * https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1
 * @param {number[]} start
 * @param {number[]} end
 * @param {number} n
 * @returns {number}
 * Time - O(n) + O(nlogn) + O(n)
 * Space - O(n)
 */

class Solution {
  //Function to find the maximum number of meetings that can
  //be performed in a meeting room.
  maxMeetings(start, end, n) {
    // code here
    const merged = [];
    for (let i = 0; i < n; i++) {
      merged.push([start[i], end[i]]);
    }
    merged.sort((a, b) => a[1] - b[1]);

    let maxMeet = 0;
    let timer = 0;

    for (let i = 0; i < n; i++) {
      if (timer == 0 || timer < merged[i][0]) {
        timer = merged[i][1];
        maxMeet += 1;
      }
    }

    return maxMeet;
  }
}
