str = input()
s1 = str.split(" ")
n = int(s1[0])
k = int(s1[1])
str = input()
s1 = str.split(" ")
scr = []
for i in s1:
    scr.append(int(i))
count = 0
for i in range(n):
    for j in range(i,n):
        if(i<j):
            if((scr[i]+scr[j])%k==0):
                count+=1
                print(scr[i],scr[j])
print(count)   
