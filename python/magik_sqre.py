vals = [[]]
cnt=0
mat = [1,2,3,4,5,6,7,8,9]
t1 = []
ans = [[0,0,0],[0,0,0],[0,0,0]]
for i in range(3):
        x = input()
        s1 = []
        s2 = x.split(" ")
        for j in range(3):
            if(mat.count(int(s2[j]))==1):
                del mat[mat.index(int(s2[j]))] 
            s1.append(int(s2[j]))
            t1.append(int(s2[j]))
        vals.insert(i,s1)
while(len(mat)!=0):
     for i in t1:
          if(t1.count(i)>1):
               t1[t1.index(i)]=mat[0]
               del mat[0]
if(t1[4]!=5):
          t1[t1.index(5)],t1[4] = t1[4],t1[t1.index(5)]
y=0

for x in range(2):
     cn=0
     for i in range(2,10,2):
         if(t1.index(i)==0 or t1.index(i)==2 or t1.index(i)==6 or t1.index(i)==8):
               if((t1.index(10-i)==0 or t1.index(10-i)==2 or t1.index(10-i)==6 or t1.index(10-i)==8) and (t1[t1.index(i)]+t1[t1.index(10-i)]==10)):
                    cn+=1
                    if(cn==4):
                         break
                    else:
                         continue
               else:
                  p =  t1.index(10-i)
                  q  = 8-t1.index(i)
                  t1[p],t1[q]= t1[q],t1[p]

         else:
              y+=0
         i+=2
     if(y==0):
         p=t1.index(2)
         if(p==0 or p==2 or p==6 or p==8):
              pass
         elif(t1[p+1]!=4 and t1[p+1]!=6 and t1[p+1]!=5):
              t1[p],t1[p+1]=t1[p+1],t1[p]
         elif(t1[p-1]!=5):
               t1[p],t1[p-1]=t1[p-1],t1[p]
         else:
               t1[p],t1[p-3]=t1[p-3],t1[p]
         p=t1.index(4)
         if(p==0 or p==2 or p==6 or p==8):
              pass
         elif(t1[p+1]!=4 and t1[p+1]!=6 and t1[p+1]!=5):
              t1[p],t1[p+1]=t1[p+1],t1[p]
         elif(t1[p-1]!=5):
               t1[p],t1[p-1]=t1[p-1],t1[p]
         else:
               t1[p],t1[p-3]=t1[p-3],t1[p]
k=0
for i in range(3):
     for j in range(3):
          ans[i][j]=t1[k]
          k+=1
for i in range(0,3,2):
     ans[i][1]=15-ans[i][0]-ans[i][2]
     ans[1][i]=15-ans[0][i]-ans[2][i]
for i in range(3):
     for j in range(3):
          cnt+=abs(ans[i][j]-vals[i][j])

print(cnt)
          
