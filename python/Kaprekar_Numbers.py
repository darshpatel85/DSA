#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the kaprekarNumbers function below.
def kaprekarNumbers(p, q):
    ans=[]
    for i in range(p,q):
        sqr = i*i;
        r=sqr-(sqr//(10**len(str(i))))*(10**len(str(i)))
        l=sqr//(10**len(str(i)))
        if(l+r==i):
             ans.append(i)
    if(ans==[]):
          print("INVALID RANGE")
    else:
          for i in ans:
               print(i,end=" ")


if __name__ == '__main__':
    p = int(input())

    q = int(input())

    kaprekarNumbers(p, q)
