#include<iostream>
using namespace std;
int mx(int i,int j,int k){
    int ret = max(i,j);
    ret = max(ret, k);
    return ret;
}
int mn(int i,int j,int k){
    int ret = min(i,j);
    ret = min(ret, k);
    return ret;
}
int par(int n){
    if(n>=3){
        return 2;
    }
    else if(n==2){
        return 1;
    }
    else{
        return 0;
    }
}
int main(){
    int n,cnt=0;
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    for(int i=0;i<n;i++){
        int l=a[i]/100;
        int m=(a[i]%100-a[i]%10)/10;
        int mst=a[i]%10;
        int ans=mx(l,m,mst)*11+mn(l,m,mst)*7;
        a[i]=(ans%100-ans%10)/10;    
    }
    int odd[10]={};
    int even[10]={};
    for(int i=0;i<n;i++){
        if(i%2==0){
            even[a[i]]++;
        }
        else
        {
            odd[a[i]]++;
        }
        }
    for(int i=0;i<10;i++){
        int x=par(odd[i])+par(even[i]);
        cnt+=min(2,x);
    }
        cout<<cnt;
}
