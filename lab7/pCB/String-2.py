def double_char(str):
  res = ''
  for i in range(len(str)):
    res += str[i] + str[i]
  return res

#---------------------------------#
def count_hi(str):
  return str.count('hi')

#---------------------------------#

def cat_dog(str):
  cat = str.count('cat')
  dog = str.count('dog')
  if cat == dog: return True
  else: return False

#---------------------------------#

def count_code(str):
  x = -1
  cnt=0
  y = str.count('co')
  for i in range(y):
    x = str.find('co', x+1)
    if (x+3 <= len(str)-1): 
      if str[x+3] == 'e': cnt+=1
  return cnt

#---------------------------------#

def end_other(a, b):
  a = a.lower()
  b = b.lower()
  k = False
  
  if(len(a) >= len(b)):
    for i in range(len(b)):
      if b[len(b)-1-i] == a[len(a)-1-i]: k = True
      else:
        k = False
        break
  else:
    for i in range(len(a)):
      if b[len(b)-1-i] == a[len(a)-1-i]: k = True
      else: 
        k = False
        break
  
  return k

#---------------------------------#

def xyz_there(str):
  y = str.count('xyz')
  x = -1
  k = False
  if y>0:
    for i in range(y):
      x = str.find('xyz', x+1)
      if x==0: return True
      elif x>0 and str[x-1]!='.': return True
      else: k = False
  else: k = False
  return k
