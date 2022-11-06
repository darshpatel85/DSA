import sys
t = int ( sys.stdin.readline() )
while(t):
    n=int(input())
    x=input()
    a=[int(c) for c in x.split(" ")]
    s=dict()
    for i in range(n):
        if(a[i]!=0 and a[i] not in s.keys()):
            s[a[i]]=a[i]
    print(len(s))
    t-=1