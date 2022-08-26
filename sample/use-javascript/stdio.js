'use strict';

const main = (arg) => {
  //入力
  //環境によって?改行コードが'\r\n'か'\n'になる。
  const input = arg.trim().split(/\r?\n/);
  let intX, intY, strZ;
  [intX, intY] = input[0].split(' ').map((str) => parseInt(str, 10));
  strZ = input[1];

  //出力
  console.log(intX, intY, strZ);
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
