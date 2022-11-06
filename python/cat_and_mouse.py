n= int(input())
for i in range(n):
     s=list(map(int,input().rstrip().split()))
     c1 = s[0]
     c2 = s[1]
     m = s[2]
     if(abs(c1-m)<abs(c2-m)): 
         print("Cat A")
     elif(abs(c1-m)>abs(c2-m)):
        print("Cat B")
     else:
          print("Mouse C")

        
