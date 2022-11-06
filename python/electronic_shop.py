s=list(map(int,input().rstrip().split()))
b = s[0]
m = s[1]
n = s[2]
m1=list(map(int,input().rstrip().split()))
n1=list(map(int,input().rstrip().split()))
val = -1
mx = 0
for i in m1:
     for j in n1:
          if(i+j<=b):
               mx = max(i+j,mx)
               val=mx
print(val)
