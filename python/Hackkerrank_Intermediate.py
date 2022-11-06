def minimumSwaps(status):
    # Write your code here
    s=[c for c in status]
    c1=0
    n=len(s)
    c2=0
    for i in range(0,n,2):
        if(s[i]=='R'):
            c1+=1
        else:
            c2+=1
    print(c1,c2)
    
if __name__ == '__main__':

    status = input()

    result = minimumSwaps(status)
    print(result)
