t = int(input())
for t_itr in range(t):
     nms = input().split()
     n = int(nms[0])
     m = int(nms[1])
     s = int(nms[2])
     m=m%n
     s=s+m-1
     if(s>n):
          s-=n

     print(s)
          
