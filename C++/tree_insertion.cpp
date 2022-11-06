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
void Insert(node* root,node* add){
	queue<node *> que;
	que.push(root);
	while(que.size()>0){
		node *n=que.front();
		que.pop();
		if(n->left==NULL){
			n->left=add;
			break;
		}
		else
			que.push(n->left);
		if(n->right==NULL){
			n->right=add;
			break;
		}
		else
			que.push(n->right);
	}	
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
	node *tmp=new node(x);
	Insert(root,tmp);
	cout<<"\nInorder: ";
	printInorder(root);
}
}
