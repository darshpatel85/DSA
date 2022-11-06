import math
import os
import random
import re
import sys
def gridSearch(g,p):
     for _ in range(len(g)):
          g[_]=str(g[_])
     for _ in range(len(p)):
          p[_]=str(p[_])
     t=0
     x=-1
     i=0
     j=0
     while(i<len(g)):
          t=g[i].find(p[j],t)
          if(t!=-1 and (x==t or j==0)):
               i+=1
               j+=1
               x=t
               if(j==len(p)):
                    return "Yes"
          elif(j!=0):
               i=i-j
               j=0
               t=x+1
               x=-1
          else:
               i+=1
               j=0
               t=0
               x=-1
     return "No"
               
          
               
               
if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        RC = input().split()

        R = int(RC[0])

        C = int(RC[1])

        G = []

        for _ in range(R):
            G_item = input()
            G.append(G_item)

        rc = input().split()

        r = int(rc[0])

        c = int(rc[1])

        P = []

        for _ in range(r):
            P_item = input()
            P.append(P_item)

        result = gridSearch(G, P)
        print(result)
