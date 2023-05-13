S = input()
N = int(input())
# ans = -1
count = S.count('?')
# for i in range(2 ** count):
#     S_calc = S
#     for j in range(count):  # このループが一番のポイント
#         if ((i >> j) & 1):  # 順に右にシフトさせ最下位bitのチェックを行う
#             S_calc = S_calc.replace('?','1',1)
#         else:  # 順に右にシフトさせ最下位bitのチェックを行う
#             S_calc = S_calc.replace('?','0',1)
#     if ans < int(S_calc, 2) and int(S_calc, 2) <= N:
#         ans = int(S_calc, 2)
# print(ans)

S_calc = S.replace('?','0')
if int(S_calc, 2) > N:
    print(-1)
else:
    for i in range(count):
        S_calc = S
        S_calc = S_calc.replace('?','1',1)
        S_calc = S_calc.replace('?','0')
        if int(S_calc, 2) <= N:
            S = S.replace('?','1',1)
        else:
            S = S.replace('?','0',1)
    print(int(S,2))