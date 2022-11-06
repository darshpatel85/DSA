#include<bits/stdc++.h>

using namespace std;
int main(){
	vector<int> a;
	a.push_back(2);
	int sum=2;
	int n,cnt=0,i=3;
	cin>>n;
	while(sum<=n){
		int f=0;
		for(auto it = a.begin();it!=a.end();++it){
			if(i%*it==0){
				f=1;
				break;
			}
		}
		if(f==0){
			a.push_back(i);
			int x=0;
			sum+=i;
			if(sum>n){
				break;
			}
			for(auto it=a.begin();it!=a.end();it++){
				if(sum%*it==0){
					x=1;
					break;
				}
			}
			if(x==0)
			cnt++;
		}
		i++;
	}
	cout<<cnt<<endl;
}
