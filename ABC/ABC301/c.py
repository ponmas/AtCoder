count_s = []
count_t = []
for i in range(27):
    count_s.append(0)
    count_t.append(0)

S = input()
T = input()
for s in S:
    if s == '@':
        count_s[26] += 1
    else:
        count_s[ord(s)-ord('a')] += 1
for t in T:
    if t == '@':
        count_t[26] += 1
    else:
        count_t[ord(t)-ord('a')] += 1

sum_atcoder = 0
sum_not_atcoder = 0

for i in range(26):
    if chr(i+ord('a')) in "atcoder":
        if count_s[i] < count_t[i]:
            count_s[26] -= count_t[i] - count_s[i]
        if count_s[i] > count_t[i]:
            count_t[26] += count_t[i] - count_s[i]
    else:
        sum_not_atcoder += int(abs(count_s[i]-count_t[i]))
if count_s[26] < 0 or count_t[26] < 0 or sum_not_atcoder > 0:
    print("No")
else:
    print("Yes")
# for i in count_s:
#     print(i, end=" ")
# print("")
# for i in count_t:
#     print(i, end=" ")
