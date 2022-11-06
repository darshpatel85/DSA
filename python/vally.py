n = int(input())
s = [char for char in input()]
c=0
flg=0
T=True
for i in s:
     if(i=="D"):
          c-=1
     else:
          c+=1
     if(c<0 and T):
          flg+=1
          T=False
     if(c>=0):
          T=True
print(flg)     
