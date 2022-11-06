n  = int(input())
mon  = [31,28,31,30,31,30,31,31,30,31,30,31]
sum = 243
mn = 9
if(n<1918):
    if(n%4==0):
        sum+=1
elif(n>1918):
    if((n%4==0 and n%100!=0) or n%400==0):
        sum+=1
        mn-1
else:
    sum-=13
dat = 256-sum
print(str(dat)+".0"+str(mn)+"."+str(n))


        
