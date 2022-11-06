p1=int(input())
l1=int(input())
p2=int(input())
l2=int(input())
rs=int(input())
ws=int(input())
tt=int(input())
tm_pg_1 = (p1*l1)/rs
if(tm_pg_1>=tt):
    ttl_line = tt*rs
    pg = int(ttl_line//l1)
    pos = int(ttl_line - pg*l1)
    if(pos==0):
        pos=int(l1)
    ans="READ"
else:
    tt=tt-tm_pg_1
    ttl_line = tt*ws
    pg = int(ttl_line//l2)
    pos = int(ttl_line - pg*l2)
    if(pos==0):
        pos=int(l1)
    ans="WRITE"
print(ans,pg,pos,sep=" ")