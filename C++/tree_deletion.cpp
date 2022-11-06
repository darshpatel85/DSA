#include<bits/stdc++.h>
using namespace std;
class node{
	public:
		int data;
		node *left;
		node *right;
	node(int d){
		this->data=d;
		this->left=this->right=NULL;
	}
};
void deleteDeepest(node* root,node *d_node){
	queue<node *> que;
	que.push(root);
	while(que.size()>0){
		node *n=que.front();
		que.pop();
		if(n->left!=NULL){
			if(n->left==d_node){
				n->left=NULL;
				delete(d_node);
				return;
			}
			else
			que.push(n->left);
		}
		if(n->right!=NULL){
			if(n->right==d_node){
				n->right=NULL;
				delete(d_node);
				return;
			}
			else
			que.push(n->right);
		}
	
	}		
}
void deleteNode(node*root,int k){
	queue<node *> que;
	que.push(root);
	node *temp;
	node *key_node;
	while(que.size()>0){
		temp=que.front();
		que.pop();
		if(temp->left!=NULL){
			que.push(temp->left);
		}
		if(temp->data==k){
			key_node = temp;
		}
		if(temp->right!=NULL){
			que.push(temp->right);
		}
	}
	int x=temp->data;
	deleteDeepest(root,temp);
	key_node->data = x;
}
void printInorder(node *root){
	if(root->left!=NULL)
		printInorder(root->left);
	cout<<root->data<<" ";
	if(root->right!=NULL)
		printInorder(root->right);
}
int main(){
	int x=1;
	node* root=new node(1);
	root->left=new node(2);
	root->right=new node(3);
	root->left->left=new node(4);
	root->left->right=new node(5);
	while(x){
	cin>>x;
	deleteNode(root,x);
	cout<<"\nInorder: ";
	printInorder(root);
}
}
