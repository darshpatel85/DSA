t = int(input())
for _ in range(t):
    n,b=[int(x) for x in input().split(' ')]
    A=[int(x) for x in input().split(' ')]
    A.sort()
    sm=0
    i=0
    ans=0
    while(sm<b):
        sm+=A[i]
        i+=1
        ans+=1
    print(ans)
