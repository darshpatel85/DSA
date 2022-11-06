#include<bits/stdc++.h>
using namespace std;
int search(vector<int> a,int k,int strt,int end){
        int mid=((end-strt)/2)+strt;
        if(a[mid]==k){
            return mid;
        } 
        if(a[mid]>k){
            if(mid==0){
                return mid;
            }
            if(a[mid-1]<k){
                return mid-1;
            }
            else
                return (a,k,strt,mid-1);
            }
         if(a[mid]<k){
             if(mid==end)
                return mid;
            if(a[mid+1]>k){
                return mid;
            }
            else
                return (a,k,mid+1,end);
            }
            return 1;
}
int main(){
    int n,k;
    int sum=0;
    cin>>n>>k;
    vector<int> a;
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        a.push_back(x);
        sum+=x;
    }
    sort(a.begin(),a.end());
    int j=n-1;
    int tmp=n-1;
    for(int i=0;i<k;i++){
        sum-=a[n-1];
        a[n-1]=floor(a[n-1]/2);
        sum+=a[n-1];
        if(a[n-1]<a[n-2]){
        j=search(a,a[n-1],0,n-2);
        a.insert(a.begin()+j,a[n-1]);
        a.pop_back();
        }
        if(sum==0){
            break;
        }
    }

    cout<<sum;
}