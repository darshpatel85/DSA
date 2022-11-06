import copy
nm = input().split()
n = int(nm[0])
m = int(nm[1])
grid = []
t=[]
r=[]
for _ in range(n):
     st=input()
     grid_item = [c for c in st]
     grid.append(grid_item)
for i in range(n):
     tmp=[]
     rmp=[]
     for j in range(m):
           if(grid[i][j]=="G"):
               tmp.append(1)
               rmp.append("G")
           else:
               rmpappend("B")
               tmp.append(0)
     t.append(tmp)
     r.append(rmp)

x=0
ans=1
fans=1
yn=99999
tm=0
while(yn>2):
     grid=r.copy()
     print(r)
     ans=1
     for w in range(2):
          for i in range(1,n-1):
               for j in range(1,m-1):
                    k=1
                    if(grid[i][j]=="G"):
                         y=False
                         while(1):
                              x+=1
                              if((i-k>=0 and grid[i-k][j]=="G") and (i+k<n and grid[i+k][j]=="G") and (j-k>=0 and grid[i][j-k]=="G") and (j+k<m and grid[i][j+k]=="G") and k<yn):
                                   k+=1
                                   y=True
                              else:
                                   break
                         k=k-1
                         
                         if(y):
                              do=True
                              for _ in range(k+1):
                                            if(t[i-_][j]>=(1+4*k) or  t[i+_][j]>=(1+4*k) or t[i][j-_]>=(1+4*k) or  t[i][j+_]>=(1+4*k)):
                                                  do=False
                                                  break
                              if(do):
                                   for _ in range(k+1):
                                                  t[i][j]=max(1+4*k,t[i][j])
                                                  t[i-_][j]=max(1+4*k,t[i-_][j])
                                                  t[i+_][j]=max(1+4*k,t[i+_][j])
                                                  t[i][j-_]=max(1+4*k,t[i][j-_])
                                                  t[i][j+_]=max(1+4*k,t[i][j+_])
          mx=0
          for i in range(n):
               mx=max(max(t[i]),mx)
          cnt=0
          if(tm==0):
                 yn=int((mx-1)/4)
                 tm=-1
          else:
               yn-=1
          for i in range(n):
                cnt+=t[i].count(mx)
          if(cnt>mx):
               if(ans==1):
                    ans=mx*mx
               else:
                    ans=ans*mx
               break
          for i in range(n):
               for j in range(m):
                    if(t[i][j]==mx):
                         grid[i][j]="B"
                    if(grid[i][j]=="B"):
                         t[i][j]=0
                    else:
                         t[i][j]=1
          ans*=mx
          print(yn,mx)
     for i in range(n):
          print(r[i],grid[i])
     print(ans)
     fans=max(ans,fans)
     print("f",fans)
print(ans)

