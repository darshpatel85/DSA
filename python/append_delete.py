s = [char for char in input()]
t = [char for char in input()]
x,y = len(s),len(t)
k = int(input())
v=True
m=0
while(v):
    if(len(s)!=0 and len(t)!=0 and s[0]==t[0]):
        del s[0]
        del t[0]
    else:
        v=False
if(k==len(s)+len(t)):
           print("Yes")
elif(k<len(s)+len(t)):
           print("No")
else:
     k=k-len(s)-len(t)
     if(k%2==0):
          print("Yes")
     elif(k>=x):
          print("Yes")
     else:
          print("Yes")
     
     
