#include<bits/stdc++.h>
using namespace std;
class node{
	public:
		int data;
		node *left;
		node *right;
	
	node(int x){
		this->data=x;
		this->left=this->right=NULL;
	}
};
void printInorder(node *root){
	if(root->left!=NULL)
		printInorder(root->left);
	cout<<root->data<<" ";
	if(root->right!=NULL)
		printInorder(root->right);
}
void printPreorder(node *root){
	cout<<root->data<<" ";
	if(root->left!=NULL)
		printPreorder(root->left);
	if(root->right!=NULL)
		printPreorder(root->right);
}
void printPostorder(node *root){
	if(root->left!=NULL)
		printPostorder(root->left);
	if(root->right!=NULL)
		printPostorder(root->right);
	cout<<root->data<<" ";
}
void printLevelorder(node *root){
	queue<node *> que;
	que.push(root);
	while(que.size()>0){
		node *n=que.front();
		que.pop();
		cout<<n->data<<" ";
		if(n->left!=NULL)
			que.push(n->left);
		if(n->right!=NULL)
			que.push(n->right);
	}
}
int main(){
	node* root=new node(1);
	root->left=new node(2);
	root->right=new node(3);
	root->left->left=new node(4);
	root->left->right=new node(5);
	cout<<"Inorder: ";
	printInorder(root);
	cout<<"\nPreorder: ";
	printPreorder(root);
	cout<<"\nPostorder: ";
	printPostorder(root);
	cout<<"\nLevelorder: ";
	printLevelorder(root);
}
