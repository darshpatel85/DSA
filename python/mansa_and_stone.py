#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the stones function below.
def stones(n, a, b):
     ans=[]
     sm=(n-1)*a
     for i in range(n):
          if(sm not in ans):
               ans.append(sm)
          sm+=b-a
     ans.sort()
     for i in ans:
          print(i,end=" ")
     print()
          

if __name__ == '__main__':

    T = int(input())

    for T_itr in range(T):
        n = int(input())

        a = int(input())

        b = int(input())

        result = stones(n, a, b)


