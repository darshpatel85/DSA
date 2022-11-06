n= int(input())
for i in range(n):
     t = int(input())
     x=0
     for i in range(t+1):
          if(i%2==0):
                x+=1
          else:
               x*=2
     print(x)
