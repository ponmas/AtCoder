[N] = list(map(int,input().split()))
A = list(map(int,input().split()))
ans = ""
bf = A[0]
for a in A[1:]:
    if bf > a:
        for i in range(bf,a, -1):
            print(i, end=' ')
    if bf < a:
        for i in range(bf,a, 1):
            print(i, end=' ')
    bf = a
print(A[N-1])