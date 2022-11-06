#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the happyLadybugs function below.
def happyLadybugs(b):
     B = [c for c in b]
     for i in range(len(B)):
          if((i+1<len(B) and b[i+1]==b[i]) or (i-1>-1 and b[i-1]==b[i])):
               print(i,B[i])

if __name__ == '__main__':

    g = int(input())

    for g_itr in range(g):
        n = int(input())

        b = input()

        result = happyLadybugs(b)
