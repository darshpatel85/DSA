#include<iostream>
using namespace std;

int search(long long v[],long long lb, long long ub, long long x){
    if(lb<ub){
        cout<<"cd:"<<lb<<endl;
        int mid=((ub-lb)/2)+lb;
        if(v[mid]==x){
            cout<<"cd1:"<<mid<<endl;
			return mid;
            
        }
        else if(v[mid]>x){
        	cout<<"cd2:"<<mid<<endl;
            return search(v,lb,mid-1,x);
        }
        else{
        	cout<<"cd3:"<<mid<<endl;
            return search(v,mid+1,ub,x);
        }
    }
    else if(lb==ub){
        cout<<"cdsf:"<<lb<<endl;
        if(v[lb]==x){
            return lb;
        }
        return (lb-1);
    }
    
}
int main(){
	long long a[100],n,find;
	cout<<"Enter number of element:\n";
	cin>>n;
	cout<<"Enter Array in  sorted form:\n";
	for(int i=0;i<n;i++){
		cin>>a[i];
	}	
	cout<<"enter element you want to search\n";
	cin>>find;
	int ans = search(a,0,n-1,find);
	cout<<ans;
}
