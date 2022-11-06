n = int(input())
p = int(input())
l=1
r=n
if(p%2==0):
     l=0
if(n%2==0 and p%2!=0):
     r=n+1
if(n%2!=0 and p%2==0):
     r=n-1
for  i in range(n):
          if(p==l):
               print(i)
               break
          elif(p==r):
              print(i)
              break
          else:
               l+=2
               r-=2
