def subArraySum(arr, n): 
    #Your code here
    stri=0
    endi=0
    tsm=arr[0]
    x=[]
    while(stri<n):
        if(tsm<n):
            endi+=1
            if(endi>=n):
                break
            tsm+=arr[endi]
        elif(tsm==n):
            x= [stri+1,endi+1]
            break
        else:
            tsm-=arr[stri]
            stri+=1
    if(len(x)==0):
          return(-1)
    return(x[len(x)-1])
T=int(input())
c=[]
for _ in range(T):
     n=int(input())
     arr=[c for c in range(1,n+1)]
     c.append(subArraySum(arr,n))
for _ in c:
     print(_)
