#include<bits/stdc++.h>
using namespace std;
int main(){
	char c[20]="Darsh patel";
	cout<<c;
	string str="Darsh patel";
	getline(cin,str);
	cout<<str<<endl;
	str.push_back('h');
	cout<<str<<endl;
	std::string::iterator it;
	for(it=str.begin();it!=str.end();it++){
		cout<<*it<<" ";
	}
	cout<<endl;
	str.copy(c,5,2);
	cout<<"\n"<<c;
}
