#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the cutTheSticks function below.
def cutTheSticks(arr):
     ans=[]
     mn=10000
     while(mn!=100000):
          mn=10000
          cnt=0
          for i in arr:
               if(i<mn and i!=0):
                    mn=i
          for i in range(len(arr)):
               if(arr[i]!=0):
                    cnt+=1
                    arr[i]-=mn
          ans.append(cnt)
     print(ans)
if __name__ == '__main__':
    
    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    result = cutTheSticks(arr)
