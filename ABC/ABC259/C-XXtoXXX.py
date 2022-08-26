S = input()
T = input()
sChar= list([""])
sCharNum= list([0])
tChar= list([""])
tCharNum= list([0])
flag = False
for s in S:
    if s != sChar[-1]:
        sChar.append(s)
        sCharNum.append(1)
    else:
        sCharNum[-1] += 1
for t in T:
    if t != tChar[-1]:
        tChar.append(t)
        tCharNum.append(1)
    else:
        tCharNum[-1] += 1

if len(sChar) == len(tChar):
    for i in range(len(sChar)):
        if sChar[i] != tChar[i]:
            break
        if sCharNum[i] > tCharNum[i]:
            break
        if sCharNum[i] == 1 and tCharNum[i] != 1:
            break
        if i == len(sChar) - 1:
            flag = True
if flag:
    print("Yes")
else:
    print("No")