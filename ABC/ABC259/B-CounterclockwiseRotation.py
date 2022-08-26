import numpy as np

s = input().split()
a=int(s[0])
b=int(s[1])
d=int(s[2])

d = np.deg2rad(d)

rot_x = (a * np.cos(d)) - (b * np.sin(d))
rot_y = (a * np.sin(d)) + (b * np.cos(d))
print(rot_x, end=" ")
print(rot_y, end=" ")