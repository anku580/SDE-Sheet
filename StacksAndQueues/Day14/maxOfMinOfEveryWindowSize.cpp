// https://www.codingninjas.com/codestudio/problems/max-of-min_982935
//  Time - O(n*m) m is the nums array size
//  Space - O(n) n is the max size of window

#include <bits/stdc++.h>
vector<int> maxMinWindow(vector<int> nums, int n)
{
    // Write your code here.
    vector<int> ans;
    deque<int> dq;
    for (int k = 1; k <= n; k++)
    {

        int mini = INT_MIN;

        for (int i = 0; i < nums.size(); i++)
        {

            if (!dq.empty() && i - dq.front() >= k)
            {
                dq.pop_front();
            }

            while (!dq.empty() && nums[dq.back()] > nums[i])
            {
                dq.pop_back();
            }

            dq.push_back(i);

            if (i >= k - 1)
            {
                mini = max(nums[dq.front()], mini);
            }
        }

        dq.clear();
        ans.push_back(mini);
    }

    return ans;
}