scores_count = int(input())
scores = list(map(int, input().rstrip().split()))
alice_count = int(input())
alice = list(map(int, input().rstrip().split()))
s1 = [1]
cnt = 1
for i in range(1,len(scores)):
     if(scores[i]==scores[i-1]):
          s1.append(cnt)
     else:
          cnt+=1
          s1.append(cnt)
print(s1)
for i in range(len(alice)):
     for j in range(1,len(scores)):
          if(alice[i]<scores[j-1] and alice[i]>=scores[j]):
               print(s1[j])
               break
          if(alice[i]>=scores[0]):
               print(s1[0])
               break
          if(alice[i]<scores[sc]:
               print(s1[len(s1)-1]+1)
               break

 
