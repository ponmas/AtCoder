#include<stdio.h>
#include <iostream>
using namespace std;

int main() {
	int min = 10000000000;
	int u = 0, r = 0, d = 0, l = 0;
	int U[200001][2];
	int R[200001][2];
	int D[200001][2];
	int L[200001][2];
	int X, Y, N;
	char S;
	
	cin >> N;

	for (int i = 0; i < N; i++) {
		cin >> X >> Y;
		cin >> S;
	}

	for (int i = 0; i < N - 1; i++) {
		if (A[i] < A[i + 1]) {
			money = (money / A[i]) * A[i + 1] + (money % A[i]);
		}
	}

	cout << money << endl;

	return 0;
}