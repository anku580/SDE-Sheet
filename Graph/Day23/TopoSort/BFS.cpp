// https://www.codingninjas.com/codestudio/problems/982938
//  Time - O(N+E)
//  Space - O(N)
#include <bits/stdc++.h>

vector<int> topologicalSort(vector<vector<int>> &edges, int v, int e)
{
    // Write your code here

    vector<int> adj[v];
    vector<int> inDegree(v, 0);

    for (int i = 0; i < e; i++)
    {
        int u = edges[i][0];
        int v = edges[i][1];

        adj[u].push_back(v);
        inDegree[v] += 1;
    }

    vector<int> topo;
    queue<int> q;
    for (int i = 0; i < v; i++)
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
        topo.push_back(node);

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

    return topo;
}