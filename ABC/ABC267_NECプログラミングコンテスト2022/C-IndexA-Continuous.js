//C-IndexA-Continuous
'use strict';

const main = (arg) => {
  //入力
  //環境によって?改行コードが'\r\n'か'\n'になる。
  const input = arg.trim().split(/\r?\n/);

  let N, M;
  [N, M] = input[0].split(' ').map((str) => parseInt(str, 10));
  let A = input[1].split(' ').map((str) => BigInt(str));

  //sum 初期化
  let Msum = [BigInt(0)];
  for (let i = 0; i < M; i++) {
    Msum[0] += A[i];
  }
  for (let i = 0; i < N - M; i++) {
    Msum.push(Msum[i] - A[i] + A[i + M]);
  }

  let max = BigInt(0);
  let sum = BigInt(0);

  for (let i = 0; i < M; i++) {
    sum += BigInt(i + 1) * A[i];
  }
  max = sum;

  for (let i = 0; i < N - M; i++) {
    sum = sum - Msum[i] + BigInt(M) * A[i + M];
    if (max < sum) {
      max = sum;
    }
  }
  //出力
  console.log(Number(max));
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
