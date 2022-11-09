
// https://www.codingninjas.com/codestudio/problems/count-distinct-substrings_985292
// Time - O(N*N)
// Space - Hypothetical

#include <bits/stdc++.h>

struct TrieNode
{
    TrieNode *children[26];
    bool isEndOfWord = false;

    void insert(char key)
    {
        children[key - 'a'] = new TrieNode();
    }

    bool containsKey(char key)
    {
        if (children[key - 'a'] != NULL)
            return true;

        return false;
    }

    TrieNode *get(char Key)
    {
        return children[Key - 'a'];
    }

    void setEnd()
    {
        isEndOfWord = true;
    }
};

int insertAllStrings(string &a, TrieNode *root)
{

    TrieNode *curr = root;
    int count = 0;
    for (auto itr : a)
    {
        if (!curr->containsKey(itr))
        {
            curr->insert(itr);
            count += 1;
        }
        curr = curr->get(itr);
        curr->setEnd();
    }

    return count;
}

int countDistinctSubstrings(string &s)
{
    //    Write your code here.
    TrieNode *root = new TrieNode();
    int count = 0;
    for (int i = 0; i < s.size(); i++)
    {
        for (int j = i; j < s.size(); j++)
        {
            string sub = s.substr(i, j + 1 - i);
            count += insertAllStrings(sub, root);
        }
    }

    return count + 1;
}