def make_bricks(small, big, goal):
  if (goal%5)<=small and (goal-(big*5))<=small: return True
  else: return False

#---------------------#

def lone_sum(a, b, c):
  if a==b==c: return 0
  elif a==b: return c
  elif a==c: return b
  elif c==b: return a
  else: return a+b+c

#--------------------#

def lucky_sum(a, b, c):
  if a!=13 and b!=13 and c!=13: return a+b+c
  elif a==13: return 0
  elif b==13: return a
  elif c==13: return a+b
  else: return 0
  

#---------------------#

def no_teen_sum(a, b, c):
  if a>=13 and a<=19 and a!=15 and a!=16: a=0
  if b>=13 and b<=19 and b!=15 and b!=16: b=0
  if c>=13 and c<=19 and c!=15 and c!=16: c=0
  return a+b+c

#--------------------#

def round_sum(a, b, c):
  a = round10(a)
  b = round10(b)
  c = round10(c)
  return a+b+c

def round10(a):
  if a%10>=5: a = a+(10-a%10)
  if a%10<5: a = a - (a%10)
  return a

#----------------------#

def close_far(a, b, c):
  if abs(b-a)<=1 and abs(c-a)>=2 and abs(c-b)>=2: return True
  elif abs(c-a)<=1 and abs(b-a)>=2 and abs(b-c)>=2: return True
  else: return False

#----------------------#

def make_chocolate(small, big, goal):
  if (goal%5)<=small and (goal-(big*5))<=small: 
    if (goal-(big*5))>=0: return (goal-(big*5))
    else: return goal%5
  else: return -1
