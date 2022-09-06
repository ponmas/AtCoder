#include<stdio.h>
#include <iostream>
using namespace std;

int main() {
	int X;
	cin >> X;

	for (int i = 1; i <= 8; i++) {
		if (X >= 2000 - 200 * i) {
			cout << i << endl;
			break;
		}
	}
	return 0;
}