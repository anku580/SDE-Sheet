// https://www.codingninjas.com/codestudio/problems/k-max-sum-combinations_975322
// Time - O(nlog(n)) if(k <= n)
// Space - O(n) + O(n)

#include <bits/stdc++.h> 
vector<int> kMaxSumCombination(vector<int> &a, vector<int> &b, int n, int k){
	// Write your code here.
    priority_queue<pair<int, pair<int, int>>> pq;
    set<pair<int, int>> s;
    
    sort(a.begin(), a.end());
    sort(b.begin(), b.end());
    
    pq.push(make_pair(a[n-1] + b[n-1], make_pair(n-1, n-1)));
    s.insert(make_pair(n-1, n-1));
    vector<int> ans;
    
    while(k != 0) {
        pair<int, pair<int, int> > temp = pq.top();
        pq.pop();
        
        ans.push_back(temp.first);
        
        int i = temp.second.first;
        int j = temp.second.second;
        
        if(s.find(make_pair(i-1, j)) == s.end()) {
            pq.push(make_pair(a[i-1] + b[j], make_pair(i-1, j)));
            s.insert(make_pair(i-1, j));
        }
        
        if(s.find(make_pair(i, j-1)) == s.end()) {
            pq.push(make_pair(a[i] + b[j-1], make_pair(i, j-1)));
            s.insert(make_pair(i, j-1));
        }
        
        k -= 1;
    }
    
    return ans;
}