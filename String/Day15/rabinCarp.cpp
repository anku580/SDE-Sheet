// https://www.codingninjas.com/codestudio/problems/1115738
// Time - O(n-m+1), worst O(mn)
// Space - O(1)

#include <bits/stdc++.h>

long long int generateHashCode(int i, int j, string s, int le)
{

    int len = le;
    long long int code = 0;
    for (int k = i; k <= j; k++)
    {

        code += (s[k] - 'A') * pow(26, len);
        len -= 1;
    }

    return code;
}

vector<int> stringMatch(string &str, string &pat)
{
    // Write your code here
    vector<int> ans;
    int patLen = pat.size() - 1;
    long long int ansCode = generateHashCode(0, pat.size() - 1, pat, patLen);
    long long int code = generateHashCode(0, pat.size() - 1, str, patLen);

    if (code == ansCode)
        ans.push_back(0);
    for (int i = 1; i < str.size() - patLen; i++)
    {
        // rolling hash
        code = ((code - ((str[i - 1] - 'A') * pow(26, patLen))) * 26) + (str[i + patLen] - 'A');

        if (code == ansCode)
            ans.push_back(i);
    }

    return ans;
}
