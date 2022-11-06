#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the cavityMap function below.
def cavityMap(grid):
     mp=[]
     for i in grid:
          mp.append([c for c in i])
     for i in range(1,len(mp)-1):
          for j in range(1,len(mp)-1):
               if(mp[i-1][j]<mp[i][j] and mp[i+1][j]<mp[i][j] and mp[i][j-1]<mp[i][j] and mp[i][j+1]<mp[i][j]):
                    mp[i][j]='X'
     grid=[]
     for i in range(len(mp)):
          for j in mp[i]:
               print(j,end='')
          print()
if __name__ == '__main__':

    n = int(input())

    grid = []

    for _ in range(n):
        grid_item = input()
        grid.append(grid_item)

    result = cavityMap(grid)
    
