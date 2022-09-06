#include<stdio.h>
#include <iostream>
using namespace std;

int main() {
	int A, B, C, K;
	cin >> A >> B >> C;
	cin >> K;

	for (int i = 0; i < K; i++) {

		if (A >= B) {
			B *= 2;
			continue;
		}

		if (B >= C) {
			C *= 2;
			continue;
		}
	}

	if (A < B&&B < C)
		cout << "Yes" << endl;
	else
		cout << "No" << endl;

	return 0;
}