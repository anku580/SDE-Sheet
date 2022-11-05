// https://www.codingninjas.com/codestudio/problems/1062626?
// Time - O(N+E)
// Space - O(N)
#include <bits/stdc++.h>

int detectCycleInDirectedGraph(int n, vector<pair<int, int>> &edges)
{
    // Write your code here.
    int m = edges.size();
    vector<int> adj[n + 1];
    vector<int> inDegree(n + 1, 0);

    for (int i = 0; i < m; i++)
    {
        int u = edges[i].first;
        int v = edges[i].second;

        adj[u].push_back(v);
        inDegree[v] += 1;
    }

    queue<int> q;
    for (int i = 0; i < n + 1; i++)
    {
        if (inDegree[i] == 0)
        {
            q.push(i);
        }
    }

    while (!q.empty())
    {
        int node = q.front();
        q.pop();

        for (int i = 0; i < adj[node].size(); i++)
        {
            int neigh = adj[node][i];

            inDegree[neigh] -= 1;
            if (inDegree[neigh] == 0)
            {
                q.push(neigh);
            }
        }
    }

    for (int i = 0; i < n + 1; i++)
    {
        if (inDegree[i] != 0)
            return 1;
    }

    return 0;
}