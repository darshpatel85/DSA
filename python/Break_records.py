n = int(input())
str = input()
s1 = str.split(" ")
scr = []
for i in s1:
    scr.append(int(i))
mn = scr[0]
mx = scr[0]
mnCount=0
mxCount=0
for i in scr:
    if(mn>i):
        mn=i
        mnCount+=1
    if(mx<i):
        mx=i
        mxCount+=1
print(mxCount,mnCount)
