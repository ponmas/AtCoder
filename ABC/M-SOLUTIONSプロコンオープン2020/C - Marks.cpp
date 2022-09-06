#include<stdio.h>
#include <iostream>
using namespace std;

int main() {
	long long N, K;
	static long long A[200001];

	cin >> N >> K;

	for (int i = 0; i < N; i++) {
		cin >> A[i];
	}

	for (int i = K; i < N; i++) {
		if (A[i] > A[i - K])
			cout << "Yes" << endl;
		else
			cout << "No" << endl;
	}


	return 0;
}