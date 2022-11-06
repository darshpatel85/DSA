n = int(input())
str = input()
s1 = str.split(" ")
sqr = []
for i in s1:
    sqr.append(int(i))
str = input()
s1 = str.split(" ")
d = int(s1[0])
m  = int(s1[1])
count=0
for i in range(n):
    sum=0
    if(i+m>n):
       break
    for j in range(m):
        sum+=sqr[i]
        i+=1
    i-=m
    if(sum==d):
        count+=1
print(count)
