#include <iostream>
using namespace std;
int main() {
	int a, b, temp;
	cout<<"Enter the first number:\n ";
	cin>>a;
	cout<<"Enter the second number:\n ";
	cin>>b;
	cout<<n1<<" "<<n2<<" "; //printing 0 and 1
	for(i=2;i<number;++i) //loop starts from 2 because 0 and 1 are already printed
	{
		n3=n1+n2;
		cout<<n3<<" ";
		n1=n2;
		n2=n3;
	}
	return 0;
}

