n=int(input())
bride=[c for c in input()]
groom=[c for c in input()]
i=0
j=0
cnt=0
while(i<n):
     if(bride[i]==groom[j]):
          i+=1
          cnt=0
          groom[j]='*'
     if(j<n-1):
          j+=1
     else:
          j=0
     cnt+=1
     if(cnt>n-1):
          break
ans = n - i
print(ans)
          
