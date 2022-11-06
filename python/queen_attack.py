nk = input().split()
n = int(nk[0])
k = int(nk[1])
rc = input().split()
i = int(rc[0])
j = int(rc[1])
obs = []
cnt=0
x1=x2=x3=x4=x5=x6=x7=x8=True
for _ in range(k):
     obs.append(list(map(int,input().rstrip().split())))

g=0
while(x1 or x2 or x3 or x4 or x5 or x6 or x7 or x8):
     g+=1
     if(x1 and obs.count([i+g,j])==0 and i+g<n+1):
          cnt+=1         
     else:
          x1=False
          
     if(x2 and obs.count([i+g,j-g])==0 and i+g<n+1 and j-g>0):
          cnt+=1
     else:
          x2=False
          
     if(x3 and obs.count([i+g,j+g])==0 and j+g<n+1 and i+g<n+1):
          cnt+=1
     else:
          
          x3=False
         
     if(x4 and obs.count([i,j-g])==0 and j-g>0):
          cnt+=1
     else:
          
          x4=False
         
     if(x5 and obs.count([i,j+g])==0 and j+g<n+1):
          cnt+=1
     else:
          
          x5=False
          
     if(x6 and obs.count([i-g,j])==0 and i-g>0):
          cnt+=1
          
     else:
          
          x6=False
          
     if(x7 and obs.count([i-g,j-g])==0 and i-g>0 and j-g>0):
          cnt+=1
          
     else:
          
          x7=False
          
     if(x8 and obs.count([i-g,j+g])==0 and j+g<n+1 and i-g>0):
          cnt+=1
     else:
          
          x8=False
          
print(cnt)
