//A-AnywayTakahashi.js

'use strict';

const main = (arg) => {
  //入力
  const input = arg.trim().split(/\r?\n/);
  const n = input[0].split(' ');
  const data = input[1].split(' ').map((str) => parseInt(str, 10));
  let sum = 0;
  for (let i of data) {
    sum += i;
  }

  //出力

  console.log(sum);
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
