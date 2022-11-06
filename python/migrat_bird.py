n = int(input())
str = input()
s1 = str.split(" ")
scr = []
cunt = []
for i in s1:
    scr.append(int(i))
for i in range(len(scr)):
    x = scr.index(scr[i])
    if(i != x):
        scr[i] = "*"
    else:
        cunt.append(scr.count(scr[x]))
for i in scr:
    if(i == '*'):
        scr.remove(i)
mx = cunt[0]
sc = scr[0]
for i in range(len(cunt)):
    if(mx<cunt[i] and scr[i]!=sc):
        mx = cunt[i]
        sc=scr[i]
    elif(mx==cunt[i]):
        sc = min(scr[i],sc)
print(sc)
