n = int(input())
s = str(input())
a = s.split(" ")
for i in a:
    if int(i) % 2 == 0:
        print(i, end = " ")
