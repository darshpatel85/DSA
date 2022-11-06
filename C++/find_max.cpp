#include<iostream>
using namespace std;

int search(int a[],int k,int strt,int end){
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
}
int main(){
	int a[100],n,find;
	cout<<"Enter number of element:\n";
	cin>>n;
	cout<<"Enter Array in  sorted form:\n";
	for(int i=0;i<n;i++){
		cin>>a[i];
	}	
	cout<<"enter element you want to search\n";
	cin>>find;
	int ans = search(a,a[n-1],0,n-2);
	cout<<ans;
}
