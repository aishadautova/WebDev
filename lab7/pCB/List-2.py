def count_evens(nums):
  cnt=0
  for i in nums:
    if i%2 == 0: cnt+=1
  return cnt

#-----------------------------#

def big_diff(nums):
  mi = min(nums)
  ma = max(nums)
  return ma-mi

#-----------------------------#

def sum13(nums):
  sum = 0
  for i in range(len(nums)):
    if nums[i]!=13:
      if i==0: sum += nums[i]
      
      if i>0 and nums[i-1]!=13:
        sum += nums[i]
  return sum

#-----------------------------#

def centered_average(nums):
  return (sum(nums) - max(nums) - min(nums)) / (len(nums) - 2)


#-----------------------------#

def sum67(nums):
  flag=False
  sum=0
  for num in nums:
      if(num==6):             
          flag=True
          continue
      if(num==7 and flag is True):
          flag=False
          continue
      if(flag is False):           
         sum+=num
  return sum

#-----------------------------#

def has22(nums):
  for i in range(len(nums)-1):
    if nums[i] == 2 and nums[i+1] == 2:
      return True
                  
  return False
  
