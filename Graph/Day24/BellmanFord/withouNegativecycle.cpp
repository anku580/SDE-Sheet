#include <bits/stdc++.h>
int bellmonFord(int n, int m, int src, int dest, vector<vector<int>> &edges)
{
    // Write your code here.
    vector<int> distance(n + 1, 1e9);
    distance[src] = 0;
    int j = 0;
    while (j < n - 1)
    {
        for (int i = 0; i < edges.size(); i++)
        {
            auto data = edges[i];
            int u = data[0];
            int v = data[1];
            int wt = data[2];

            if (distance[u] != 1e9 && distance[u] + wt < distance[v])
            {
                distance[v] = distance[u] + wt;
            }
        }
        j++;
    }

    return distance[dest];
}