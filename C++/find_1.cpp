#include<iostream>
using namespace std;

int search(int a[],int strt,int end){
	if(strt<=end){
		int mid=((end-strt)/2)+strt;
		if(mid==0 and a[mid==1]){
			return 0;
		}
		if(a[mid]==1 and a[mid-1]==0){
			return mid;
		}
		else if(a[mid]==0 and a[mid-1]==0){
			return search(a,mid+1,end);
		}
		else{
			return search(a,strt,mid-1);
		}
	}
	return -1;
}
int main(){
	int a[100],n,find;
	cout<<"Enter number of element:\n";
	cin>>n;
	cout<<"Enter Array in  sorted form:\n";
	for(int i=0;i<n;i++){
		cin>>a[i];
	}	
	int ans = search(a,0,n-1);
	cout<<ans;
}
