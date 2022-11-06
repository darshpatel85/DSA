class Node:
     data=None
     next=None
     def __init__(self,d=None):
          self.data=d
          self.next=None
class linkedList:
     def __init__(self):
          self.head=None
          self.trav=None
     def printList(self):
          tmp=self.head
          while(tmp):
               print(tmp.data)
               tmp=tmp.next
if __name__ == '__main__':
     llist=linkedList()
     llist.head=Node(1)
     llist.trav=Node(1)
     i=5
     while(i):
          x=Node(int(input()))
          while(llist.trav!=None):
               llist=llist.trav.next
          llist.trav.next=x
          i-=1
          llist.printList()
     
