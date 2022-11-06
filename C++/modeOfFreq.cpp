#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int n,a[10001];
        cin>>n;
        for(int i=0;i<n;i++)
            cin>>a[i];
        int count[11] = {0};
        for(int i=0;i<n;i++)
            count[a[i]]++;
        for(int i=0;i<n;i++)
            a[i]=0;
        for(int i=1;i<11;i++)
            if(count[i]!=0)
            a[count[i]]++;
        int mx=a[0];
        int pos=0;
        for(int i=1;i<n;i++)
            if(a[i]>mx){
                mx=a[i];
                pos=i;
            }
        cout<<pos;
    }
}