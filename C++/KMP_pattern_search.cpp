#include<bits/stdc++.h>
using namespace std;
int search(char* text,char* ptrn){
	int m=strlen(text);
	int n=strlen(ptrn);
	int count=0;
	int lps[n]={0};
	int i=1;
	while(i<n){
		int j=0;
		int k=0;
		if(ptrn[j]==ptrn[i] and j<i and i<n){
			while(ptrn[j]==ptrn[i] and j<i and i<n){
				k++;
				lps[i]=k;
				j++;
				i++;	
			}
		}
		else
			i++;
	}
	cout<<endl;
	i=0;int j=-1;
	while(i<m){
		if(ptrn[j+1]==text[i]){
			i++;
			if(j==n-2){
				count++;
				j=lps[n-1]-1;
			}
			else{
				j++;
			}
		}
		else{
			if(j==-1){
				i++;
			}
			else{
				j=lps[j+1]-1;
			}
		}

	}
	return count;
	
/*
abababbabbababababababababababaaababababaabbbabbababa
ab
*/
}
int main(){
	char text[100],ptrn[50];
	cin>>text>>ptrn;
	cout<<search(text,ptrn);
}
