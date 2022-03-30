from itertools import tee
from operator import truediv


k = False
n = int(input())
a = map(int, input().split())
a = list(a)
for i in range(1, len(a)):
    if a[i] * a[i - 1] > 0:
      k = True
        
if(k): print("YES")
else: print("NO")