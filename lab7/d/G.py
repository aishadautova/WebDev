n = int(input())
a = map(int, input().split())
a = list(a)
b = []
for i in range(len(a)):
  b.append(a[len(a)-1-i])  

for i in b:
  print(i, " ")