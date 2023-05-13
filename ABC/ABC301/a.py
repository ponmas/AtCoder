N = int(input())
S = input()
count_a = 0
count_t = 0
for char in S:
    if char == "A":
        count_a += 1
    if char == "T":
        count_t += 1
    if count_a >= N/2:
        print("A")
        break
    if count_t >= N/2:
        print("T")
        break
    