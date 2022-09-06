#include<stdio.h>
#include <iostream>
using namespace std;

int main() {
	long long money = 1000;
	long long kabu = 0;
	long long N, K;
	static long long A[100];

	cin >> N;

	for (int i = 0; i < N; i++) {
		cin >> A[i];
	}

	for (int i = 0; i < N-1; i++) {
		if (A[i] < A[i + 1]) {
			money = (money / A[i]) * A[i + 1] + (money % A[i]);
		}
	}

	cout << money << endl;

	return 0;
}