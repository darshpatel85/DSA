#include<iostream>
using namespace std;
int main(){
	int n,a[100],min,i,j;
	cin>>n;
	for(i=0;i<n;i++){
		cin>>a[i];
	}
	for(i=0;i<n-1;i++){
		min=i;
		for(j=i+1;j<n;j++){
			if(a[j]<a[min]){
				min=j;
			}
		}
		int temp=a[min];
		a[min]=a[i];
		a[i]=temp;
	}
	for(i=0;i<n;i++){
		cout<<a[i]<<"\t";
	}
}
