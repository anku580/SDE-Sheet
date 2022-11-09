// https://www.codingninjas.com/codestudio/problems/implement-trie_1387095?
// Time = O(N)
// Space - O(1)

#include <bits/stdc++.h>

struct TrieNode
{
    TrieNode *children[26];
    int prefixCount = 0;
    int wordCount = 0;
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

    TrieNode *get(char key)
    {
        return children[key - 'a'];
    }

    void incrementPrefixCount()
    {
        prefixCount += 1;
    }

    void incrementWordCount()
    {
        wordCount += 1;
    }

    void decrementPrefixCount()
    {
        prefixCount -= 1;
    }

    void decrementwordCount()
    {
        wordCount -= 1;
    }

    void setEndOfWord()
    {
        isEndOfWord = true;
    }

    bool checkEndOfWord()
    {
        return isEndOfWord;
    }
};

class Trie
{

public:
    TrieNode *root;
    Trie()
    {
        // Write your code here.
        root = new TrieNode();
    }

    void insert(string &word)
    {
        // Write your code here.
        TrieNode *curr = root;

        for (int i = 0; i < word.size(); i++)
        {
            if (!curr->containsKey(word[i]))
            {
                curr->insert(word[i]);
            }
            curr = curr->get(word[i]);
            curr->incrementPrefixCount();
        }

        curr->setEndOfWord();
        curr->incrementWordCount();
    }

    int countWordsEqualTo(string &word)
    {
        // Write your code here.

        TrieNode *curr = root;

        for (int i = 0; i < word.size(); i++)
        {
            if (!curr->containsKey(word[i]))
            {
                return 0;
            }
            curr = curr->get(word[i]);
            if (curr->prefixCount == 0)
                return 0;
        }

        return curr->checkEndOfWord() ? curr->wordCount : 0;
    }

    int countWordsStartingWith(string &word)
    {
        // Write your code here.
        TrieNode *curr = root;

        for (int i = 0; i < word.size(); i++)
        {
            if (!curr->containsKey(word[i]))
            {
                return 0;
            }
            curr = curr->get(word[i]);
        }

        return curr->prefixCount;
    }

    void erase(string &word)
    {
        // Write your code here.
        TrieNode *curr = root;

        for (int i = 0; i < word.size(); i++)
        {
            if (!curr->containsKey(word[i]))
            {
                return;
            }
            curr = curr->get(word[i]);
            curr->decrementPrefixCount();
        }

        if (curr->checkEndOfWord())
        {
            curr->wordCount -= 1;
        }
    }
};
