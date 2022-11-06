#include<iostream>
using namespace std;
int chocs(int i,int j,int k){
    if(i==j)
        return k;
    else if(i>j){
        return chocs(i-j,j,++k);
    }
    else{
        return chocs(i,j-i,++k);
    }
}
int main(){
    int p,q,r,s,cnt=0;
    cin>>p>>q>>r>>s;
    for(int i=p;i<=q;i++){
        for(int j=r;j<=s;j++){
            cnt+=chocs(i,j,1);
        }
    }
    cout<<cnt;
}