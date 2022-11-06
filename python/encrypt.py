import math as mth
s = input()
enc = []
s = s.replace(" ","")
m = mth.floor(mth.sqrt(len(s)))
n = mth.ceil(mth.sqrt(len(s)))
s1  =[char for char in  s]
if(m*n<len(s)):
     m=n
k=0
for i in range(m):
     s2=[]
     for j in range (n):
          if(k<len(s1)):
               s2.append(s1[k])
          else:
               s2.append("*")
          k+=1
     enc.append(s2)
s1=""
for i in range(n):
     for j in range(m):
               s1+=enc[j][i]
     s1+=" "
s1 = s1.replace("*","")
print(s1)
          
