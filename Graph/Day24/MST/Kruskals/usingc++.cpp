// https://www.codingninjas.com/codestudio/problems/1082553
// Time - O(ElogE)+O(E*4*alpha), ElogE for sorting and E*4*alpha for findParent operation ‘E’ times
// Space - O(N)
#include <bits/stdc++.h>

bool comp(vector<int> a, vector<int> b)
{
    return a[2] < b[2];
}

int getParent(int node, vector<int> &parent)
{

    if (parent[node] == node)
        return node;

    return parent[node] = getParent(parent[node], parent);
}

int kruskalMST(int n, int m, vector<vector<int>> &graph)
{
    // Write your code here.

    sort(graph.begin(), graph.end(), comp);
    vector<int> parent(n + 1, 0);
    vector<int> rank(n + 1, 0);

    for (int i = 1; i <= n; i++)
    {
        parent[i] = i;
    }

    int ans = 0;
    for (int i = 0; i < graph.size(); i++)
    {
        auto data = graph[i];
        int u = data[0], v = data[1], wt = data[2];

        int p_u = getParent(u, parent);
        int p_v = getParent(v, parent);

        if (p_u == p_v)
            continue;
        ans += wt;
        if (rank[p_u] > rank[p_v])
        {
            parent[p_v] = p_u;
        }
        else if (rank[p_v] > rank[p_u])
        {
            parent[p_u] = p_v;
        }
        else
        {
            parent[p_v] = p_u;
            rank[p_u] += 1;
        }
    }

    return ans;
}