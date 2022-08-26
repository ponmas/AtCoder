'use strict';

const main = (arg) => {
  const input = arg.trim().split(/\r?\n/);
  let intX, intY, strZ;
  [intX, intY] = input[0].split(' ').map((str) => parseInt(str, 10));
  strZ = input[1];
  console.log(intX, intY, strZ);
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
