n = int(input())
s = list(map(int,input().rstrip().split()))
cnt=0
for i in range(n):
     for j in range(i+1,n):
          if(s[i]==s[j] and s[i]!=0):
               cnt+=1
               s[i]=0
               s[j]=0
               break
print(cnt)
