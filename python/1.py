#%%
str1 = input()
s1 = str1.split(" ")
len1 = int(s1[0])
len2 = int(s1[1])
str1 = input()
arr1 = str1.split(" ")
str1 = input()
arr2 = str1.split(" ")
for i in range(len(arr1)):
    arr1[i] = int(arr1[i])

for i in range(len(arr2)):
    arr2[i] = int(arr2[i])
arr1.sort()
arr2.sort()
arr3 = []
for i in range(arr1[len1-1],arr2[0]+1):
    f=0
    for j in arr1:
        if(i%j==0):
            f=1
        else:
            f=0
            break
    if(f==1):
        arr3.append(i)

arr1 = []
for k in arr3:
    f=0
    for m in arr2:
        if(m%k==0):
            f=1
        else:
            f=0
            break
    if(f==1):
        arr1.append(k)

print(len(arr1))

# %%
