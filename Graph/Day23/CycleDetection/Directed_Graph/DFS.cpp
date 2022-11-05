// https://www.codingninjas.com/codestudio/problems/1062626?
// Time - O(N+E)
// Space - O(N)
#include <bits/stdc++.h>

bool dfs(int node, vector<int> adj[], vector<int> &visited, vector<int> &visitedTracker)
{

    visited[node] = true;
    visitedTracker[node] = true;

    for (int i = 0; i < adj[node].size(); i++)
    {
        int neigh = adj[node][i];

        if (visited[neigh] && visitedTracker[neigh])
        {
            return true;
        }
        else if (!visited[neigh])
        {
            if (dfs(neigh, adj, visited, visitedTracker))
                return true;
        }
    }

    visitedTracker[node] = false;
    return false;
}

int detectCycleInDirectedGraph(int n, vector<pair<int, int>> &edges)
{
    // Write your code here.
    int m = edges.size();
    vector<int> adj[n + 1];
    vector<int> visited(n + 1, false);

    for (int i = 0; i < m; i++)
    {
        int u = edges[i].first;
        int v = edges[i].second;

        adj[u].push_back(v);
    }

    vector<int> visitedTracker(n + 1, false);
    for (int i = 0; i < n; i++)
    {
        if (!visited[i])
        {
            if (dfs(i, adj, visited, visitedTracker))
                return 1;
        }
    }

    return 0;
}