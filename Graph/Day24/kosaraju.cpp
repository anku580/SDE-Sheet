// https://www.codingninjas.com/codestudio/problems/985311
// Time - O(V+E) + O(E) + O(V+E)
// Space - O(V+E) + O(V) + O(V)

#include <bits/stdc++.h>

void dfs(int node, vector<int> &visited, stack<int> &topo, vector<int> adj[])
{

    visited[node] = true;

    for (int i = 0; i < adj[node].size(); i++)
    {
        int neigh = adj[node][i];

        if (!visited[neigh])
        {
            dfs(neigh, visited, topo, adj);
        }
    }

    topo.push(node);
}

void normalDFS(int node, vector<int> &v1, vector<int> tAdj[], vector<int> &path)
{
    v1[node] = true;
    path.push_back(node);
    for (int i = 0; i < tAdj[node].size(); i++)
    {
        int neigh = tAdj[node][i];

        if (!v1[neigh])
        {
            normalDFS(neigh, v1, tAdj, path);
        }
    }
}

vector<vector<int>> stronglyConnectedComponents(int n, vector<vector<int>> &edges)
{
    // Write your code here.
    vector<int> adj[n];

    for (auto it : edges)
    {
        adj[it[0]].push_back(it[1]);
    }

    // step1 - Find toposort
    stack<int> topo;
    vector<int> visited(n, false);

    for (int i = 0; i < n; i++)
    {
        if (!visited[i])
        {
            dfs(i, visited, topo, adj);
        }
    }

    // step2 - Transpose the graph
    vector<int> tAdj[n];
    for (auto it : edges)
    {
        tAdj[it[1]].push_back(it[0]);
    }

    // step3 - DFS
    vector<int> v1(n, false);
    vector<vector<int>> ans;

    while (!topo.empty())
    {
        int node = topo.top();
        topo.pop();

        vector<int> path;
        if (!v1[node])
        {
            normalDFS(node, v1, tAdj, path);
            ans.push_back(path);
        }
    }

    return ans;
}