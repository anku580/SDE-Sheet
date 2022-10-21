// https://www.codingninjas.com/codestudio/problems/merge-k-sorted-arrays_975379/
//  Time - O(N*k*log(N*k))
//  Space - O(N*k)

#include <bits/stdc++.h>

vector<int> mergeKSortedArrays(vector<vector<int>> &kArrays, int k)
{
    // Write your code here.
    // priority_queue<int>pq;
    priority_queue<int, vector<int>, greater<int>> pq;
    vector<int> ans;

    for (int i = 0; i < kArrays.size(); i++)
    {
        for (int j = 0; j < kArrays[i].size(); j++)
        {
            pq.push(kArrays[i][j]);
        }
    }

    while (pq.size() != 0)
    {
        ans.push_back(pq.top());
        pq.pop();
    }

    return ans;
}

// https://www.codingninjas.com/codestudio/problems/merge-k-sorted-arrays_975379/
//  Time - O(N*k*log(k))
//  Space - O(k)

#include <bits/stdc++.h>

vector<int> mergeKSortedArrays(vector<vector<int>> &kArrays, int k)
{
    // Write your code here.
    priority_queue<pair<int, pair<int, int>>> pq;
    // priority_queue<pair<int, pair<int, int>>, vector<int>, greater<int>>pq;
    vector<int> ans;
    int total = 0;

    for (int i = 0; i < kArrays.size(); i++)
    {
        total += kArrays[i].size();
        int lastIndex = kArrays[i].size() - 1;
        pq.push(make_pair(kArrays[i][lastIndex], make_pair(i, lastIndex)));
    }

    for (int i = 0; i < total; i++)
    {
        pair<int, pair<int, int>> topE = pq.top();
        int row = topE.second.first;
        int col = topE.second.second;
        ans.push_back(topE.first);
        pq.pop();

        if (col - 1 >= 0)
        {
            pq.push(make_pair(kArrays[row][col - 1], make_pair(row, col - 1)));
        }
        else
        {
            pq.push(make_pair(INT_MIN, make_pair(row, col + 1)));
        }
    }

    reverse(ans.begin(), ans.end());
    return ans;
}
