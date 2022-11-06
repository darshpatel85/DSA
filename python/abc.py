n = int(input())
k = int(input())
s = input().split()
arr = [int(i) for i in s]
for i in range(n):
    if(i+k < n):
        mx = max(arr[i:i+k])
        print(mx)