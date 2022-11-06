#include<iostream>
using namespace std;

int search(int a[],int k,int strt,int end){
	if(strt<=end){
		int mid=((end-strt)/2)+strt;
		if(a[mid]==k){
			return mid;
		}
		else if(a[mid]<k){
			return search(a,k,mid+1,end);
		}
		else{
			return search(a,k,strt,mid-1);
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
	cout<<"enter element you want to search\n";
	cin>>find;
	int ans = search(a,find,0,n-1);
	cout<<ans;
}
