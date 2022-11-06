t = int(input())
for t_itr in range(t):
      n = int(input())
      cnt=0
      x=n
      while(n>0):
           m=n%10
           if(m!=0 and x%m==0):
                cnt+=1
           n=n//10
      print(cnt)
