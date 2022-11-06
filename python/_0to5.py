# Function should return an integer value
def convertFive(n):
    # Code here
    x=[chr for chr in str(n)]
    cnt=x.count('0')
    print(cnt)
    for _ in range(cnt):
        tmp=x.index('0')
        if(tmp==-1):
            break
        x[tmp]='5'
    ans=''.join(x)
    return ans
    
T = int(input())
for i in range(T):
    N=int(input())
    z=convertFive(N)
    print(z)

