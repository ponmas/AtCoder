//C-ChineseRestaurant.js
'use strict';

const main = (arg) => {
  //入力
  const input = arg.trim().split(/\r?\n/);
  const n = parseInt(input[0]);
  const p = input[1].split(' ').map((str) => parseInt(str, 10));

  const move = Array.from({ length: n }, () => 0);
  const ans = Array.from({ length: n }, () => 0);

  for (let i = 0; i < p.length; i++) {
    move[(p[i] + n - i) % n]++;
  }

  for (let i = 0; i < n; i++) {
    ans[i] = move[(i - 1 + n) % n] + move[i] + move[(i + 1) % n];
  }

  //出力
  let max = 0;
  for (let a of ans) {
    if (max < a) max = a;
  }
  console.log(max);
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
