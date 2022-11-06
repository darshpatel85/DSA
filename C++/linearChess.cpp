#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int n,k;
        cin>>n;
        cin>>k;
        vector<int> a;
        for(int i=0;i<n;i++){
            int x;
            cin>>x;
            a.push_back(x);
        }
        sort(a.begin(), a.end());
        int cnt=2147483647;
        int pos=-1;
        auto it=a.begin();
        while(it!=a.end() && *it<k){
            int x = k % *it;
            if(x==0){
                x=(k/(*it));
                if(x<cnt){
                    cnt=x;
                    pos=*it;
                }
            }
            it++;
        }
        cout<<pos<<endl;
    }
}