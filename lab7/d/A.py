n = int(input())
s = str(input())
a = s.split(" ")
for i in range(len(a)):
    if i % 2 == 0:
        print(a[i], end = " ")
