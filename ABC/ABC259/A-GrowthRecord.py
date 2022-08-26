s = input().split()
N=int(s[0])
M=int(s[1])
X=int(s[2])
T=int(s[3])
D=int(s[4])

ans=min(T,D*(M-X)+T)
print(ans)