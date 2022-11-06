def find3number(A, n):
    # code here
    A.sort()
    b=['*','*','*']
    j=0
    for i in range(n):
        fst=A[i]
        b[j]=fst
        if(i+1<n and fst!=A[i+1]):
            j+=1
    if(b.count('*')==0):
        return 1
    else:
        return 0
x=find3number([1,2,1,1,3],5)
print(x)
