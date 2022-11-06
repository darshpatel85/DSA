#include<bits/stdc++.h>
using namespace std;
int search(char *text,char *ptrn){
	int m=strlen(text);
	int n=strlen(ptrn);
	int count=0;
	for(int i=0;i<m-n;i++){
		int j=0;
		for(j=0;j<n;j++){
			if(text[i+j]!=ptrn[j])
				break;
		}
		if(j==n)
			count++;
	}
	return count;
}
int main(){
	char text[100],ptrn[50];
	cin>>text>>ptrn;
	cout<<search(text,ptrn);
}
