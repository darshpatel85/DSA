#include<iostream>
#include<vector>
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
}
int search(int k,int a[],int lb,int ub,int count,int size){
    if(lb<=ub){
        int mid=(ub-lb)/2+lb;
        if(a[mid]>k){
            return search(k,a,lb,mid-1,count,size);
        }
        else if(a[mid]==k){
            count=mid;
            while(a[++mid]==k){
                count++;
            }
            return ++count;
        }
        else{
            count=mid+1;
            return search(k,a,mid+1,ub,count,size);
        }
    }
return count;
}
vector<int> countEleLessThanOrEqual(int arr1[], int arr2[], 
                             int m, int n)
{
//Your code goes here
    vector<int> a;
    MergeSort(arr2,0,n-1);
    for(int i=0;i<m;i++){
        int ans=search(arr1[i],arr2,0,n,0,n);
        a.push_back(ans);
    }
    return a;
}
int main(){
	int m,n,arr1[100],arr2[100];
	cin>>m>>n;
	for(int i=0;i<m;i++){
		cin>>arr1[i];
	}
	for(int i=0;i<n;i++){
		cin>>arr2[i];
	}
	vector<int> ans=countEleLessThanOrEqual(arr1,arr2,m,n);
	for(int i=0;i<ans.size();i++)cout<<ans[i]<<" ";
}
