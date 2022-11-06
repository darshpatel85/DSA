def sherlockAndAnagrams(s):
          for i in range(len(s)):
               for j in range(i,len(s)):
                    x=s.index(s[i],j)
                    print(x)

if __name__ == '__main__':
    q = int(input())

    for q_itr in range(q):
        s = input()
        result = sherlockAndAnagrams(s)
        print(result)
