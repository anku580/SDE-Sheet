// https://www.codingninjas.com/codestudio/problems/983635
// Time -
// Space -

#include <bits/stdc++.h>

void solve(int index, int n, string &s, map<string, bool> m, vector<string> &ans, string combi)
{

    if (index == n)
    {
        ans.push_back(combi);
    }

    for (int i = index; i < n; i++)
    {
        string sub = s.substr(index, i - index + 1);
        if (m[sub])
        {
            solve(i + 1, n, s, m, ans, combi + sub + " ");
        }
    }
}

vector<string> wordBreak(string &s, vector<string> &dictionary)
{
    // Write your code here
    vector<string> ans;
    map<string, bool> m;

    for (int i = 0; i < dictionary.size(); i++)
    {
        m[dictionary[i]] = true;
    }
    string ep = "";
    solve(0, s.size(), s, m, ans, ep);

    return ans;
}