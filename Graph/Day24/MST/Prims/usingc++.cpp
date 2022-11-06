// https://www.codingninjas.com/codestudio/problems/1095633
// Time - O(N*log(N))
// Space - O(N)

#include <bits/stdc++.h>
vector<pair<pair<int, int>, int>> calculatePrimsMST(int n, int m, vector<pair<pair<int, int>, int>> &g)
{
    // Write your code here.
    unordered_map<int, vector<pair<int, int>>> adj;
    vector<int> visited(n + 1, false);
    vector<pair<pair<int, int>, int>> ans;

    for (int i = 0; i <= m; i++)
    {
        auto data = g[i];
        int u = data.first.first;
        int v = data.first.second;
        int wt = data.second;

        adj[u].push_back(make_pair(v, wt));
        adj[v].push_back(make_pair(u, wt));
    }

    priority_queue<pair<int, pair<int, int>>, vector<pair<int, pair<int, int>>>, greater<pair<int, pair<int, int>>>> pq;
    pq.push(make_pair(0, make_pair(1, -1)));

    while (!pq.empty())
    {
        auto data = pq.top();
        pq.pop();
        int wt = data.first;
        int node = data.second.first;
        int parent = data.second.second;

        if (visited[node] == true)
            continue;

        if (parent != -1)
            ans.push_back(make_pair(make_pair(parent, node), wt));

        visited[node] = true;

        for (int i = 0; i < adj[node].size(); i++)
        {
            auto info = adj[node][i];
            int neigh = info.first;
            int neighWt = info.second;
            if (!visited[neigh])
            {
                pq.push({neighWt, {neigh, node}});
            }
        }
    }

    return ans;
}
