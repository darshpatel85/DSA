#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'decryptPassword' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def decryptPassword(s):
    # Write your code here
    t=[]
    for i in range(len(s)-1,-1,-1):
         t.append(s[i]);
    temp=[]
    strt=0
    i=0
    x=len(s)
    m=len(s)-1
    while(i < x):
        if(t[i]=='0'):
             t[i]=t[m]
             del t[m]
             x-=1
             m-=1
        elif(t[i]=='*'):
              if(t[i+1]>='a' and t[i+1]<='z' and t[i+2]>='A' and t[i+2]<='Z'):
                  t[i]=t[i+2]
                  del t[i+2]
                  m-=1
                  x-=1
                  i+=1
        i+=1
    s=''
    for i in range(len(t)-1,-1,-1):
         s+=str(t[i]);
    return s 

if __name__ == '__main__':

    s = input()

    result = decryptPassword(s)
    print(result)
