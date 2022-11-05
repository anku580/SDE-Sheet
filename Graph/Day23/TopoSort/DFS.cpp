// https://www.codingninjas.com/codestudio/problems/982938
//  Time - O(N+E)
//  Space - O(N)
#include <bits/stdc++.h>

void dfs(int node, vector<int> adj[], vector<int> &visited, stack<int> &topo)
{
    visited[node] = true;

    for (int i = 0; i < adj[node].size(); i++)
    {
        int neigh = adj[node][i];

        if (!visited[neigh])
        {
            dfs(neigh, adj, visited, topo);
        }
    }

    topo.push(node);
}

vector<int> topologicalSort(vector<vector<int>> &edges, int v, int e)
{
    // Write your code here

    vector<int> adj[v];
    vector<int> visited(v, false);

    for (int i = 0; i < e; i++)
    {
        int u = edges[i][0];
        int v = edges[i][1];

        adj[u].push_back(v);
    }

    stack<int> topo;
    for (int i = 0; i < v; i++)
    {
        if (!visited[i])
        {
            dfs(i, adj, visited, topo);
        }
    }

    vector<int> ans;
    while (!topo.empty())
    {
        ans.push_back(topo.top());
        topo.pop();
    }

    return ans;
}