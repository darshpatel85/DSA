#include<iostream>
using namespace std;
void Merge(int a[],int lb,int mid,int ub){
	int i,j,k=lb,b[ub];
	i=lb;
	j=mid+1;
	while(i<=mid && j<=ub){
		if(a[i]<=a[j]){
			b[k]=a[i];
			i++;
		}
		else{
			b[k]=a[j];
			j++;
		}
		k++;
	}
	if(j>=ub)
	while(i<=mid){
		b[k]=a[i];
		i++;
		k++;
	}
	if(i>mid)
	while(j<=ub){
		b[k]=a[j];
		j++;
		k++;
	}
	for(k=lb;k<=ub;k++){
		a[k]=b[k];
	}
}
void MergeSort(int a[],int lb,int ub){
	if(lb<ub){
		int mid=(lb+ub)/2;
		MergeSort(a,lb,mid);
		MergeSort(a,mid+1,ub);
		Merge(a,lb,mid,ub);

}

int main(){
	int n,a[100],i;
	cin>>n;
	for(i=0;i<n;i++){
		cin>>a[i];
	}
	MergeSort(a,0,n-1);
	for(i=0;i<n;i++){
		cout<<a[i]<<" ";
	}

}
