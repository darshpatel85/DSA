q = int(input())
for q_itr in range(q):
        n = int(input())
        container = []
        for _ in range(n):
            container.append(list(map(int, input().rstrip().split())))
        print(container)
