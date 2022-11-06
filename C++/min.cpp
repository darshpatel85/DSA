#include<bits/stdc++.h>
using namespace std;
int main(){
    int n,k;
    cin>>n>>k;
    vector<int> a;
    vector<int> b;
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        a.push_back(x);
    }
    sort(a.begin(),a.end());
    for(int i=0;i<k;i++){
        
        if(b.size()!=0){
            if(b[0]>a[a.size()-1]){
                a.push_back(b[0]);
                b.erase(b.begin());
            }
        }
        a[a.size()-1]=floor(a[a.size()-1]/2);
        if(a[a.size()-1]<a[a.size()-2]){
            b.push_back(a[a.size()-1]);
            a.pop_back();
        }  
    }    
    int sum=0;
    for(auto it=a.begin();it!=a.end();++it)
        sum+=*it;
    for(auto it=b.begin();it!=b.end();++it)
        sum+=*it;
    cout<<sum;
}