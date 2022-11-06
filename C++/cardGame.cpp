#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int pc,pr;
        int cpc,cpr;
        cin>>pc>>pr;
        if(pc<10 || pr<10){
            if(pc<10 && pr<10){
                cout<<1<<" "<<1;
            }
            else if(pc<10 && pr>=10){
                cout<<0<<" "<<1;
            }
            else{
                cout<<1<<" "<<1;
            }
        }
        else{
            if(pc%9==0)
                cpc=(pc/9);
            else
                cpc=1+(pc/9);
            if(pr%9==0)
                cpr=(pr/9);
            else
                cpr=1+(pr/9);
        if(cpc<cpr)
            cout<<0<<" "<<cpc;
        else
            cout<<1<<" "<<cpr;
        }
        cout<<endl;
    }
}