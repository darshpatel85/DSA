ijk = input().split()
i = int(ijk[0])
j = int(ijk[1])
k = int(ijk[2])
cnt=0
for c in range(i,j+1):
     j=[ch for ch in str(c)]
     j.reverse()
     rev=j.copy()
     rc=int(''.join(rev))
     if(abs(c-rc)%k==0):
          cnt+=1
print(cnt)
     
