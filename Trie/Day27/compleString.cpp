// https://www.codingninjas.com/codestudio/problems/complete-string_2687860
// Time - O(N*len(String))
// Space - O(1)
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

void insertAllStrings(vector<string> &a, TrieNode *root)
{

    TrieNode *curr = root;
    for (auto itr : a)
    {
        string word = itr;
        curr = root;

        // insert node
        for (int j = 0; j < word.size(); j++)
        {
            if (!curr->containsKey(word[j]))
            {
                curr->insert(word[j]);
            }
            curr = curr->get(word[j]);
        }
        curr->setEnd();
    }
}

string completeString(int n, vector<string> &a)
{
    // Write your code here.
    TrieNode *root = new TrieNode();
    int ans = 0;
    string s;

    // insert all the strings from the array a
    insertAllStrings(a, root);

    for (int i = 0; i < a.size(); i++)
    {
        string word = a[i];
        int count = 0;
        TrieNode *curr = root;

        for (int j = 0; j < word.size(); j++)
        {
            if (!curr->containsKey(word[j]))
            {
                break;
            }
            curr = curr->get(word[j]);
            if (!curr->isEndOfWord)
                break;
            count += 1;
        }

        if (count > ans)
        {
            ans = count;
            s = word;
        }
        else if (count != 0 && count == ans)
        {
            // lexicographically check
            if (s > word)
            {
                s = word;
            }
        }
    }

    return s.size() != 0 ? s : "None";
}