first_multiple_input = input().rstrip().split()
n = int(first_multiple_input[0])
k = int(first_multiple_input[1])
s = list(map(int, input().rstrip().split()))
s1 = []
for i in range(n):
     s2=[s[i]]
     for j in range(n):
          g=1
          for l in range(len(s2)):
               if(s[j]!=s2[l]):
                    if((s[j]+s2[l])%k==0):
                         g=1
                         break
                    else:
                         g=0
          if(g==0):
               s2.append(s[j])
     s1.append(s2)
for i in s1:
     for j in i:
          if(i.count(j)>1):
               i.remove(j)
t=0
for i in s1:
     t=max(t,len(i))
print(t)
