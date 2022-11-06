#include<bits/stdc++.h>
using namespace std;
class Node{
	public:
		int data;
		Node *next;
		Node *prev;
};
int main(){
	Node *head,*temp,*newNode;
	head = NULL;
	int choice = 1,len=0;
	do{	
	newNode = new Node();
	int pos,cp = 0;
	cout<<"1.insert\t2.Delete\t3.Print\t0.end:  ";
	cin>>choice;
	if(choice==1){	
	cout<<"Enter Element:";
	cin>>newNode->data;
	cout<<"Insert at:";
	cin>>pos;
	if(head == NULL){
	head = temp = newNode;
	}
	else
	{
		if(pos<=len){
			temp=head;
			if(pos==0){
				newNode->prev=NULL;
				newNode->next = head;
				head->prev = newNode;
				head = newNode; 
			}
			else{
				while(cp<pos-1){
					cp++;
					temp = temp->next;
				}
				newNode->prev=temp;
				newNode->next=temp->next;
				temp->next = newNode;
				newNode->next->prev =newNode;
				

			}
		}
		else
		cout<<"not Possible\n";	
	}
	len++;
	}
	if(choice==2){
		temp=head;
		Node *ahead;
		ahead=head->next;
		cout<<"Delete at:";
		cin>>pos;
		if(pos<len){
			if(pos==0){
				head = head->next;	
			}
			else{
				while(cp<pos-1){
				cp++;
				temp = temp->next;
				ahead = ahead->next;
				}
				temp->next=ahead->next;
				free(ahead);
			}	
		}
		else
		 cout<<"not Possible\n";
		 len--;
	}
	temp = head;
	while(temp != NULL){
		cout<<temp->data<<"\t";
		temp = temp->next;
	}
	cout<<endl;
	}while(choice);	
}
