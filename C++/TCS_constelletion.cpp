#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    string str="",tmp="",ans="";
    string A =".*.";
    string U ="*.*";
    string E="***";
    cin>>n;
    char a[3][n+1];
    for(int i=0;i<3;i++){
        for(int j=0;j<n;j++){
            cin>>a[i][j];
        }
    }
    int i=0;
    int j=0; 
    while(j<n){
        if(a[i][j]=='#'){
            ans+='#';
            j++;
            str="";
        }
        else{
            str+=a[i][j];
            j++;
        }
        if(str.length()==3){
            if(i==0){
                if(str==A){
                    tmp+='A';
                    i++;
                    j-=3;
                }
                else if(str==U){
                    tmp+='U';
                    i++;
                    j-=3;
                }
                else if(str==E)
                {
                    tmp+='E';
                    i++;
                    j-=3;
                }
                else{
                    j-=2;
                    str="";
                }
            }
            else if(i==1){
                if(str==A){
                    tmp+='A';
                    i++;
                    j-=3;
                }
                else if(str==U){
                    tmp+='U';
                    i++;
                    j-=3;
                }
                else if(str==E)
                {
                    tmp+='E';
                    i++;
                    j-=3;
                }
                else{
                    j-=2;
                    str="";
                    i=0;
                }
            }
            else if(i==2){
                if(str==A){
                    tmp+='A';
                }
                else if(str==U){
                    tmp+='U';
                }
                else if(str==E)
                {
                    tmp+='E';
                }
                else{
                    j-=2;
                    str="";
                    i=0;
                }
            }
            if(tmp.length()==3){
                if(tmp=="AEU")
                    ans+='A';
                else if(tmp=="EEE")
                    ans+='E';
                else if(tmp=="EAE")
                    ans+='I';
                else if(tmp=="EUE")
                    ans+='O';
                else if(tmp=="UUE")
                    ans+='U';
                i=0;
                tmp="";
            }
            str="";
        }

    }
    cout<<ans;
}
