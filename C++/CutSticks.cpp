#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        vector<int> a;
        cin>>n;
        for(int i=0;i<n;i++){
            int x;
            cin>>x;
            a.push_back(x);
        }
        sort(a.begin(),a.end());
        for(auto i=a.begin();i!=a.end();++i){
            if(*(i-1)==*i){
                a.erase(i);
                i--;
            }
        }
        cout<<a.size()<<endl;
        
    }    
}