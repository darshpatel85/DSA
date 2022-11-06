 sm=0
    x=True
    y=True
    lft=0
    rgt=0
    if(root.left.left):
        sm+=2*root.left.data
        lft=1
    elif(root.left):
        sm+=root.left.data
    if(root.right.right):
        sm+=2*root.right.data
        rgt=1
    elif(root.right):
        sm+=root.right.data
    if(sm==root.data):
        if(lft==1):
            x = isSumTree(root.left)
        if(rgt==1):
            y = isSumTree(root.right)
    else:
        return False
    return (True and x and y)
    
