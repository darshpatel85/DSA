def rotate(t,c):
    t+=t[0:c]
    del t[0:c]
    return t
def derotate(t,c):
    t=t[c:]+t
    del t[c:]
    return t
def sum(t):
    sm=0
    for i in range(len(t)):
        sm+=i*t[i]
    return sm
def max_sum(a,n):
    #code here
    r=a.index(a.max())
    if(r<len(a)/2):
       rotate(a,r)
    else:
        derotate(a,n-r)
    sm=sum(arr)
    return sm
