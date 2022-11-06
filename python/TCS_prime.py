def fibo(i,j,n):
     if(n==1):
          return i
     if(n==2):
          return j
     while(n>2):
          c=i+j
          i=j
          j=c
          n-=1
     return c
if __name__ == "__main__":
     c = list(map(int,input().rstrip().split()))
     p1=c[0]
     p2=c[1]
     a=[]
     ans=[]
     for i in range(p1,p2+1):
          for j in range(2,i//2+1):
               if(i%j==0):
                    break
          else:
               a.append(i)
     for i in range(len(a)):
          for j in range(len(a)):
               if(i!=j):
                    ti=str(a[i])
                    tj=str(a[j])
                    ans.append(ti+tj)
     a=[]
     for i in ans:
          for j in range(2,int(i)//2+1):
               if(int(i)%j==0):
                    break
          else:
               if(a.count(int(i))==0):
                    a.append(int(i))
     x=len(a)
     fans=fibo(a[0],a[len(a)-1],x)
     print(fans)
