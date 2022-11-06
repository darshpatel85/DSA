h = int(input())
mn = int(input())
ans = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','twenty one','twenty two','twenty three','twenty four','twenty five','twenty six','twenty seven','twenty eight','twenty nine','thirty']
if(mn==0):
     x=ans[h-1]+" o' clock"
elif(mn==1):
     x = ans[mn-1]+" minute past "+ans[h-1]     
elif(mn==15):
     x = "quarter past "+ans[h-1]
elif(mn==31):
         if(h==12):
             ans[h]='one'
         x = ans[60-mn-1]+" minute to "+ans[h]     
elif(mn==45):
     if(h==12):
          ans[h]='one'
     x = "quarter to "+ ans[h]
elif(mn==30):
     x = "half past "+ans[h-1]
elif(mn<30):
     x = ans[mn-1]+" minutes past "+ans[h-1]
else:
     if(h==12):
          ans[h]='one'
     x = ans[60-mn-1]+" minutes to "+ans[h]
print(x)
