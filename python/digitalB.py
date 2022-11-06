ins = int(input())
p = int(input())/100
limit = int(input())
rmain = limit-ins
rfr = 0
prsn=0
while(rmain>0):
    if(prsn==2):
        prsn=1
        p=(p*p)
    else:
        prsn+=1
    rfr+=1
    val = int(ins*p)
    rmain-=val
print(rfr)