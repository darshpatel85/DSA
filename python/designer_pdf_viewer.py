s = list(map(int,input().rstrip().split()))
ltter = input()
ltr = [char for char in ltter]
x=0
for i in range(len(ltr)):
     x = max(x,s[ord(ltr[i])-ord("a")])
print(x*len(ltr))
