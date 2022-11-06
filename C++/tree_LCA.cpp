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
void printInorder(node *root){
	if(root->left!=NULL)
		printInorder(root->left);
	cout<<root->data<<" ";
	if(root->right!=NULL)
		printInorder(root->right);
}
node* findLCA(node *root,int n1,int n2){
	if(root==NULL)
		return NULL;
	if(root->data==n1 || root->data==n2){
		return root;
	}
	node *left_lca = findLCA(root->left,n1,n2);
	node *right_lca = findLCA(root->right,n1,n2);
	if(left_lca!=NULL && right_lca!=NULL)
		return root;
	else{
		if(left_lca==NULL)
			return right_lca;
		else
			return left_lca;
	}
}
int main(){
	node *root=new node(1);
	root->left=new node(2);
	root->right=new node(3);
	root->left->left=new node(4);
	root->left->right=new node(5);
	root->right->left=new node(6);
	printInorder(root);
	int n1,n2;
	cin>>n1>>n2;
	cout<<findLCA(root,n1,n2)->data;	
}
