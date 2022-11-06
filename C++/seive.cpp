#include <bits/stdc++.h>
using namespace std;
int prime(int n,int m){
    int p=2;
    int count=0;
    int x=n/m;
    bool prm[n+1];
    memset(prm,true,sizeof(prm));
    while(p<=n){
        if(prm[p]){
            for(int i=p*p;i<n+1;i+=p)
                    prm[i]=false;
            }
        p++;
    }
    for(int i=2;i<x;i++){
        if(prm[i]==true){
            int chck=true;
            for(int j=1;j<m;j++){
                chck &= prm[i+x*j]; 
            }
            if(chck){
                count++;
            }
        }
    }
    return count;
}   
int main() {
	//code
	int n,p;
	cin>>n>>p;
	cout<<prime(n,p);
	return 0;
}