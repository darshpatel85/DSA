# Enter your code here. Read input from STDIN. Print output to STDOUT
t = int(input())
for _ in range(t):
    tmp =input().split(" ")
    a=tmp[0]
    b=tmp[1]
    n=int(tmp[2])
    c=a+b
    for i in range(3,n):
         a=b
         b=c
         c=a+b
         if(len(c)>n):
            break      
    print(c[n-1])
