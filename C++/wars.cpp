#include<iostream>
using namespace std;
int main(){
    int n,h,p;
    cin>>n;
    while(n--){
        cin>>h>>p;
        while(1){
            if(h<=0){
                cout<<1<<endl;
                break;
            }
            if(p==0){
                cout<<0<<endl;
                break;
            }
            h-=p;
            p/=2;
        }
    }
}