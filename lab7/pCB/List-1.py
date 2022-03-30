def first_last6(nums):
  if nums[0]==6 or nums[len(nums)-1]==6: return True
  else: return False

#-------------------------#

def common_end(a, b):
  if a[0] == b[0] or a[len(a)-1] == b[len(b)-1]: return True
  else: return False

#-------------------------#

def has23(nums):
  k=False
  for x in nums:
      if x==2 or x==3:
          k=True
          break
  return k

#-------------------------#

def make_ends(nums):
  return [nums[0],nums[len(nums)-1]]

#-------------------------#

def make_pi():
  return [3,1,4]

#-------------------------#

def max_end3(nums):
  maxi=max(nums[0], nums[2])
  return [maxi,maxi,maxi]

#-------------------------#

def middle_way(a, b):
  return [a[1],b[1]]

#-------------------------#

def reverse3(nums):
  return nums[::-1]

#-------------------------#

def rotate_left3(nums):
  return [nums[1],nums[2],nums[0]]

#-------------------------#

def same_first_last(nums):
    if len(nums)>0 and nums[0]==nums[len(nums)-1]:
        return True
    else:
        return False

#-------------------------#

def sum2(nums):
  if len(nums)>1:
      return nums[0]+nums[1]
  elif len(nums)==1:
      return nums[0]
  else:
      return 0

#-------------------------#

def sum3(nums):
  sum=0
  for x in nums:
      sum+=x
  return sum

