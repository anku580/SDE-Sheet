// https://www.codingninjas.com/codestudio/problems/1062670?t
// Time - O(N+E)
// Space - O(N+E) + O(N)

#include <bits/stdc++.h>

bool dfs(int node, vector<int> adj[], vector<int> &visited, int parent)
{

    visited[node] = true;

    for (int i = 0; i < adj[node].size(); i++)
    {
        int neigh = adj[node][i];

        if (neigh != parent && visited[neigh])
        {
            return true;
        }
        else if (!visited[neigh])
        {
            if (dfs(neigh, adj, visited, visitedTracker, node))
                return true;
        }
    }
    return false;
}

string cycleDetection(vector<vector<int>> &edges, int n, int m)
{
    // Write your code here.
    vector<int> adj[n + 1];
    vector<int> visited(n + 1, false);

    for (int i = 0; i < m; i++)
    {
        int u = edges[i][0];
        int v = edges[i][1];

        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    for (int i = 0; i < n; i++)
    {
        if (!visited[i])
        {
            if (dfs(i, adj, visited, -1))
                return "Yes";
        }
    }

    return "No";
}
