#include <cmath>
#include <cstdio>
#include <vector>
#include<cstring>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    int t;
	cin>>t;
    for(int k=0;k<t;k++){
        long long int n;
        char *a[100];
        char *b[100];
        cin>>a>>b>>n;
        char *c= new char[std::strlen(a)+std::strlen(b)+1];
        std::strcpy(c,a);
        std::strcat(c,b);
        for(int i=3;i<=n;i++){
		a=b;
        b=c;
        c=a+b;
        char *a1=new char[std::strlen(b)+1];
        a=a1
        char *b1=new char[std::strlen(c)+1];
        b=b1
        char *c1=new char[std::strlen(a)+std::strlen(b)+1];
        c=c1
     	
     	}
     	cout<<c;
	}  
    
    return 0;
}

