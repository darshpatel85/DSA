str = input()
s1 = str.split(" ")
n = int(s1[0])
k = int(s1[1])
str = input()
s1 = str.split(" ")
bill = []
for i in s1:
    bill.append(int(i))
b = int(input())
sm=0
for i in bill:
    sm+=i
sm -= bill[k]
avg = sm/2
if(avg==b):
    print("Bon Appetit")
else:
    print(int(b-avg))
