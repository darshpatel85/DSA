from array import *
vals = []
rst = []
str = input()
sk = str.split(" ")
m = int(sk[0])
n = int(sk[1])
r = int(sk[2])
for i in range(m):
        x = input()
        s1 = []
        s2 = x.split(" ")
        for j in range(n):
            s1.append(int(s2[j]))
        vals.insert(i,s2)
upL = 0
dwnL = m-1
lftL = 0
rgtL = n-1
for x in range(max(m//2,n//2)):
    if(upL>=dwnL or lftL>=rgtL):
        break
    for t in range(r):
        for i in range(lftL,rgtL+1):
            rst.append(vals[upL][i])
        for i in range(upL+1,dwnL):
            rst.append(vals[i][rgtL])
        for i in range(rgtL,lftL-1,-1):
            rst.append(vals[dwnL][i])        
        for i in range(dwnL-1,upL,-1):
            rst.append(vals[i][lftL])
        temp = rst[0]
        for i in range(len(rst)-1):
            rst[i]=rst[i+1]
        rst[len(rst)-1]=temp
        for i in range(lftL,rgtL+1):
            vals[upL][i]=rst[0]
            del rst[0]
        for i in range(upL+1,dwnL):
            vals[i][rgtL]=rst[0]
            del rst[0]
        for i in range(rgtL,lftL-1,-1):
            vals[dwnL][i]=rst[0]
            del rst[0]
        for i in range(dwnL-1,upL,-1):
            vals[i][lftL]=rst[0]
            del rst[0]        
    upL += 1
    dwnL -= 1
    lftL += 1
    rgtL -= 1                       
for i in range(m):
    for j in range(n):
        print(vals[i][j],end=" ")
    print()
        
