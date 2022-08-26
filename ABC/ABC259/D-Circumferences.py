import math

x = list()
y = list()
r = list()

index = list()
ix = list()
iy = list()
ir = list()

cList = list()

N = int(input())
s = input().split()
sx=int(s[0])
sy=int(s[1])
tx=int(s[2])
ty=int(s[3])

for i in range (N):
    s = input().split()
    x.append(int(s[0]))
    y.append(int(s[1]))
    r.append(int(s[2]))
    index.append(i)
    ix.append(int(s[0]))
    iy.append(int(s[1]))
    ir.append(int(s[2]))

for i in range (N):
    if math.sqrt((sx-x[i])*(sx-x[i])+(sy-y[i])*(sy-y[i])) == r[i]:
        cList.append(i)

for i in cList:
    usedI = index.index(i)
    del ix[usedI]
    del iy[usedI]
    del ir[usedI]
    del index[usedI]

count = 0

while True:
    count = len(cList)
    for i in range (count):
        for j in range(len(index)):
            if math.sqrt((x[cList[i]]-ix[j])*(x[cList[i]]-ix[j])+(y[cList[i]]-iy[j])*(y[cList[i]]-iy[j])) <= r[cList[i]] + ir[j]:
                if math.sqrt((x[cList[i]]-ix[j])*(x[cList[i]]-ix[j])+(y[cList[i]]-iy[j])*(y[cList[i]]-iy[j])) >= abs(r[cList[i]] - ir[j]):
                    cList.append(index[j])
                    del ix[j]
                    del iy[j]
                    del ir[j]
                    del index[j]
                    break
    if count == len(cList):
        break


flag = False
for i in range (len(cList)):
    if math.sqrt((tx-x[cList[i]])*(tx-x[cList[i]])+(ty-y[cList[i]])*(ty-y[cList[i]])) == r[cList[i]]:
        flag = True
        break

if flag:
    print("Yes")
else:
    print("No")