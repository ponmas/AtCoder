'use strict';

const main = (arg) => {
  const input = arg.trim().split('\n');
  let x, y, n;
  [x, y] = input[0].split(' ').map((str) => parseInt(str, 10));
  console.log(x, y);
};

//提出用
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
