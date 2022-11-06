#include<bits/stdc++.h>
using namespace std;
int prime(int d,int p){
    int it=2;
    int div=d/p;
    int cnt=0;
    bool prm[d];
    memset(prm,true,sizeof(prm));
    while(it<d){
        if(prm[it]){
            for(int i=it*it;i<d;i+=it)
                    prm[i]=false;
            }
        it++;
    }
    for(int i=2;i<div;i++){
        if(prm[i]==true){
            int chck=true;
            for(int j=1;j<p;j++){
                chck = chck & prm[i+div*j]; 
            }
            if(chck){
                cnt++;
            }
        }
    }
    return cnt;
}
int main(){
    int d,p;
    cin>>d>>p;
    cout<<prime(d,p);
}