t = int(input())
for i in range(t):
    inp = input().split(" ")
    D = int(inp[0])
    d = int(inp[1])
    P = int(inp[2])
    Q = int(inp[3])
    n = int(D/d)
    print(int(d*((n*(2*P+(n-1)*Q))/2))+(D%d)*(P+n*Q))