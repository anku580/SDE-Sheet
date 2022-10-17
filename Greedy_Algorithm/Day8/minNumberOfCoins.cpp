# https://www.codingninjas.com/codestudio/problems/975277?
# Time - O(amount)
# Space - O(1);


#include <bits/stdc++.h> 

int denom(int n) {
    
    if(n == 0) return 0;
    
    if(n >= 1 && n<2) return 1;
    else if(n >= 2 && n<5) return 2;
    else if(n>=5 && n<10) return 5;
    else if(n>=10 && n<20) return 10;
    else if(n>=20 && n<50) return 20;
    else if(n>=50 && n<100) return 50;
    else if(n>=100 && n<500) return 100;
    else if(n>=500 && n<1000) return 500;
    else if(n>=1000) return 1000;
}

int findMinimumCoins(int amount) 
{
    // Write your code here
    int coins = 0;
    
    while(amount != 0) {
        int d = denom(amount);
        coins += amount/d;
        amount = amount%d;
    }
    
    return coins;
}
