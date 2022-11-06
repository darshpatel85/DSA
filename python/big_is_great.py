n=int(input())
for i in range(n):
     s = input()
     s1  =[char for char in  s]
     s2=s1.copy()
     t = False
     j=0
     
     if(s2.sort() == s1):
          print("no answer")
     else:
        s1.reverse()
        for i in range(len(s1)):
            for j in range(i+1,len(s1),1):
                for ts in range(i,j,1):
                        tmp = s1[ts]
                        if(ord(tmp)>ord(s1[j])):
                            tmp,s1[j] = s1[j],tmp
                            s1[ts]=tmp
                            t = True
                            break
                if t:
                        break
            if t:
                break
        s1.reverse()
        if t:
            j=len(s1)-j
            s2 = ""
            for i in range(0,j):
                s2+=s1[0]
                del s1[0]
            s1.sort()
            for i in s1:
                s2+=i
            if(s2==s):
                print("no answer")
            else:
                print(s2)
        else:
            print("no answer")
