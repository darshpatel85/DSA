#include<iostream>
using namespace std;

int partition(int a[],int lb,int ub){
	int pivot = a[lb];
	int strt=lb;
	int end=ub;
	while(strt<end){
		do{
			strt++;
		}while(a[strt]<=pivot);
		do{
			end--;
		}while(a[end]>pivot);
		if(strt<end){
		int t=a[strt];
		a[strt]=a[end];
		a[end]=t;
		}	
	}
	int t=a[lb];
	a[lb]=a[end];
	a[end]=t;
	return end;
}
void quickSort(int a[],int lb,int ub){
	if(lb<ub){
		int loc = partition(a,lb,ub);
		quickSort(a,lb,loc);
		quickSort(a,loc+1,ub);
	}
}
int main(){
	int n,a[100],i;
	cin>>n;
	for(i=0;i<n;i++){
		cin>>a[i];
	}
	quickSort(a,0,n);
	for(i=0;i<n;i++){
		cout<<a[i]<<"\t";
	}
}
