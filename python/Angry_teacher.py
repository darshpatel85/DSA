n= int(input())
for i in range(n):
     stu = list(map(int,input().rstrip().split()))
     n = stu[0]
     k = stu[1]
     stu = list(map(int,input().rstrip().split()))
     cnt=0
     for i in stu:
          if(i<=0):
                cnt+=1
     if(cnt>=k):
          print("NO")
     else:
          print("YES")
