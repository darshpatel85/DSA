#include<bits/stdc++.h>
using namespace std;
#define d 256

// this program is from geekforgeeks for better understanding watch abdul bari.
search(char *text,char *ptrn,int q){
	int m=strlen(text);
	int n=strlen(ptrn);
	int count=0;
	int h=1;
	int p=0,t=0;
	for(int i=0;i<n-1;i++){
		h=(h*d)%q;
	}
	for(int i=0;i<n;i++){
		p=(d*p+ptrn[i])%q;
		t=(d*t+text[i])%q;
	}
	for(int i=0;i<=m-n;i++){
		if(p==t){
		int f=0;
		for(int j=0;j<n;j++){
			if(text[i+j]!=ptrn[j])
				f=1;
				break;
		}
		if(f==0)
			count++;	
		}
		if(i<m-n){
		t=(d*(t-text[i]*h)+text[i+n])%q;
		if(t<0)
			t+=q;
		}
	}
	return count;
}
int main(){
	char text[100],ptrn[50];
	cin>>text>>ptrn;
	cout<<search(text,ptrn,101);
}
