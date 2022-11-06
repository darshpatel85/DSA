s=list(map(int,input().rstrip().split()))
n1 = s[0]
n2 = s[1]
no1 = [int(char) for char in str(n1)]
no2 = [int(char) for char in str(n2)]
if(len(no1)<len(no2)):
     print(-1)
else:
     no1.sort()
     l=[]
     for i in range(len(no1)):
          if(no1[i]==no2[i]):
                l.append(no1[i])
                del no1[i]
                del no2[i]
                i-=1
          else:
               no1.sort()
               for j in range(len(no1)):
                    if(no1[j]>no2[i]):
                         l.append(no1[j])
                         del no1[j]
                         break
               else:
                    for j in range(len(no1)):
                              if(no1[j]==no2[j]):
                                   for h in range(len(l)-1,-1,-1):
                                        
                         
               l.append(no1)
               break
     print(l)
     
