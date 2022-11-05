//https://www.codingninjas.com/codestudio/problems/1062670?t
//Time - O(N+E)
//Space - O(N+E) + O(N)

#include<bits/stdc++.h>

bool bfs(int node, vector<int> adj[], vector<int> &visited) {
    queue<pair<int, int>>q;
    q.push(make_pair(node, -1));
    visited[node] = true;
    
    while(!q.empty()) {
        pair<int, int>top = q.front();
        int parent = top.second;
        q.pop();
        
        for(int i=0; i<adj[top.first].size(); i++) {
            int neigh = adj[top.first][i];
            
            if(visited[neigh] && parent != neigh) {
                return true;
            }
            else if(!visited[neigh]) {
                visited[neigh] = true;
                q.push(make_pair(neigh, top.first));
            }
        }
    }
    
    return false;
}

string cycleDetection (vector<vector<int>>& edges, int n, int m)
{
    // Write your code here.
    vector<int>adj[n+1];
    vector<int>visited(n+1, false);
    
    for(int i=0; i<m; i++) {
        int u = edges[i][0];
        int v = edges[i][1];
        
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    
    for(int i=0; i<n; i++) {
        if(!visited[i]) {
            if(bfs(i, adj, visited)) return "Yes";
        }
    }
    
    return "No";
}
