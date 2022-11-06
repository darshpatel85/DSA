HW = input().split()
H = int(HW[0])
W = int(HW[1])
A = []
sm = []
for i in range(H):
     s=[]
     for j in range(W):
          s.append(0)
     sm.append(s)
mx=0
for _ in range(H):
        x =list(map(int, input().rstrip().split()))
        mx =max(mx,max(x))
        A.append(x)
while(mx>0):
     for i in range(H):
          for j in range(W):
               if(A[i][j]>0):
                    cnt=4
                    if(i-1>=0 and A[i-1][j]>0):
                         cnt-=1
                    if(j-1>=0 and A[i][j-1]>0):
                         cnt-=1
                    if(i+1<H and A[i+1][j]>0):
                         cnt-=1
                    if(j+1<W and A[i][j+1]>0):
                         cnt-=1
               else:
                    cnt=0
               sm[i][j]+=cnt
     for i in range(H):
          for j in range(W):
                    A[i][j]-=1               
     mx-=1
sum=H*W*2
for i in sm:
     for j in i:
          sum+=j
print(sum)
