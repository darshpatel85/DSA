n = int(input())
s = list(map(int,input().rstrip().split()))
s1=[]
for i in range(n):
     s2=[s[i]]
     for j in range(n):
          if(i!=j):
               g=1
               for k in s2:
                    if(abs(k-s[j])>1):
                         g=1
                         break
                    else:
                         g=0
               if(g==0):
                    s2.append(s[j])
     s1.append(s2)
x=0
for i in s1:
     x = max(len(i),x)
print(x)
