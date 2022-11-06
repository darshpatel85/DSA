#include<iostream>
using namespace std;
int main(){
	int n,a[100],i,j,tmp;
	cin>>n;
	for(i=0;i<n;i++){
		cin>>a[i];	
	}
	for(i=1;i<n;i++){

		cout<<endl;
		j=i-1;
		tmp=a[i];
		while(j>=0 && a[j]>tmp){
			a[j+1]=a[j];
			j--;
		}
		a[j+1]=tmp;
			for(j=0;j<n;j++){
		cout<<a[j]<<" ";
	}	
	}

	
}
