//B-ModuloNumber.js
'use strict';

const main = (arg) => {
  //入力
  //環境によって?改行コードが'\r\n'か'\n'になる。
  const input = arg.trim().split(/\r?\n/);
  let n = BigInt(input[0]);

  let ans = n % 998244353n;
  if (ans < 0) ans += 998244353n;

  //出力
  console.log(Number(ans));
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
