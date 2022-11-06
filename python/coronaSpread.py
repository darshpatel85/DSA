t=int(input())
while(t):
    t-=1
    n=int(input())
    st=input()
    bst_cs=0
    wst_cs=0
    grps=[]
    a=[int(x) for x in st.split(" ")]
    for i in range(n-1):
        nt=0
        for j in range(i+1,n):
            if((a[i]-a[j])==0):
                t=-1
            else:
                t=(j-i)/(a[i]-a[j])
            if(t>0):
                nt=1
                for g in grps:
                    if i in g:
                        if j in g:
                            pass
                        else:
                            g.append(j)
                    elif j in g:
                        if i in g:
                            pass
                        else:
                            g.append(i)
                else:
                    lst=[i,j]
                    grps.append(lst) 
        if(nt==0):
            grps.append([i])    
    print(grps)
    t-=1