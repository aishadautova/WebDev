k = 0
n = int(input())
a = map(int, input().split())
a = list(a)
for i in range(1, len(a)):
    if a[i] > a[i - 1]:
        k += 1
print(k)