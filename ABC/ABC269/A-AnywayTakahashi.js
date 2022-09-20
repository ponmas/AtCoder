//A-AnywayTakahashi.js

'use strict';

const main = (arg) => {
  //入力
  const input = arg.trim().split(/\r?\n/);
  const data = input[0].split(' ').map((str) => parseInt(str, 10));

  console.log(data[0] + data[1]);
  console.log(data[2] - data[3]);
  //出力

  console.log((data[0] + data[1]) * (data[2] - data[3]));
  console.log('Takahashi');
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
