test = int(input())

def numberOfOnes(direction,inc,staticIndex,start,end,a):
     count = 0
     if(direction == "r"):
          for i in range(start,end,inc):
               if(a[staticIndex][i] == "0"):
                    break
               count+=1
     else:
          for i in range(start,end,inc):
               if(a[i][staticIndex] == "0"):
                    break
               count+=1
     return count
def numberOfLs(y,x):
     if(x>1 and y>1):
          if(int(y/2)>x):
               return x-1
          else:
               return int(y/2)-1
     else:
          return 0
     
for t in range(test):
     x,y =[int(i) for i in input().split()]
     arr=[]
     for i in range(x):
          arr.append(input().split())
     l=0
     for i in range(x):
          for j in range(y):
               if(arr[i][j] =="1"):
                    left = numberOfOnes("r",-1,i,j-1,-1,arr)+1
                    right = numberOfOnes("r",1,i,j+1,y,arr)+1
                    if(left==1 and right==1):
                         break;
                    top = numberOfOnes("c",-1,j,i-1,-1,arr)+1
                    bottom = numberOfOnes("c",1,j,i+1,x,arr)+1
                    l += numberOfLs(left,top)
                    l += numberOfLs(top,left)
                    l += numberOfLs(left,bottom)
                    l += numberOfLs(bottom,left)
                    l += numberOfLs(right,top)
                    l += numberOfLs(top,right)
                    l += numberOfLs(right,bottom)
                    l += numberOfLs(bottom,right)
     print('Case #'+str(t)+": "+str(l))
