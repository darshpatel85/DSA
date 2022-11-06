#include<iostream>
#include<vector>
using namespace std;
int sum(vector<int> v){
    int sm=0;
    for(auto it=v.begin();it!=v.end();++it)
        sm+=*it;
    return sm;
}

int main()
{
    vector<int> b;
    string x;
    getline(cin,x);
    int y=0;
    for(int i=0;x[i]!= '\0';i++){
        if(x[i]== ' '){
            b.push_back(y);
            y=0;
        }
        else{
            y=y*10+(x[i]-48);
        }
    }
    b.push_back(y);
    int sm=sum(b);
    int l1=0;
    int l2=sm;
    int ans=0;
    int size=b.size();
    while(size>2){
        l1+=b[0];
        l2-=b[0];
        if(sm>abs(l1-l2)){
            sm=abs(l1-l2);
            ans=max(l1,l2);
        }
        for(int i=1;i<size;i++){
            l2=l2+b[i-1]-b[i];
            l1=l1-b[i-1]+b[i];
            if(sm>abs(l1-l2)){
                sm=abs(l1-l2);
                ans=max(l1,l2);
            }
        }
        size--;
    }
    cout<<ans;
} // namespace std;

