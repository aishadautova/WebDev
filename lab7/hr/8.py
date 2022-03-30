# Enter your code here. Read input from STDIN. Print output to STDOUT
import re

n = int(input())

for i in range(n):
    m = input()
    
    pattern = r'^([a-zA-Z]+) <[a-zA-Z](\w|-|\.|_)+@([a-z]+)\.[a-z]{1,3}>$'
    
    x = re.search(pattern, m)
    
    if x:
        print(m)
