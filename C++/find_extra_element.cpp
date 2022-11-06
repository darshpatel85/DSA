#include<iostream>
using namespace std;
int search(int b[],int k,int strt,int end){
	if(strt<=end){
		int mid=((end-strt)/2)+strt;
		if(b[mid]==k){
			return mid;
		}
		else if(b[mid]<k){
			return search(b,k,mid+1,end);
		}
		else{
			return search(b,k,strt,mid-1);
		}
	}
	return -1;
}
int findExtra(int a[], int b[], int n) {
    // add code here.
    for(int i=0;i<n;i++){
	int y = search(b,a[i],0,n-2);
    if(y==-1){
        return a[y];
    }
}

   
}
int main(){
	int n,a[100],b[100];
	cin>>n;
	for(int i=0;i<n;i++){
		cin>>a[i];
	}
	for(int i=0;i<n;i++){
		cin>>b[i];
	}
	int ans=findExtra(a,b,n);
	cout<<ans;
	return 0;
}
