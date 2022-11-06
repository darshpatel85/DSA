#include<iostream>
using namespace std;
int main(){
	int n,a[100],i,j;
	cin>>n;
	for(i=0;i<n;i++){
		cin>>a[i];
	}
	for(i=0;i<n-1;i++){
		int f=0;
		for(j=0;j<n-1-i;j++){
			if(a[j]>a[j+1]){
				int tmp=a[j];
				a[j]=a[j+1];
				a[j+1]=tmp;
				f=1;
			}
		}
		if(f==0){
			break;
		}
	}
	for(i=0;i<n;i++){
		cout<<a[i]<<"\t";
	}
}
