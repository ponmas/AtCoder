//A-Apple.js
'use strict';

const main = (arg) => {
  //入力
  const [x, y, n] = arg.trim().split(' ');

  if (x * 3 <= y) {
    console.log(x * n);
  } else {
    console.log(parseInt(n / 3) * y + (n % 3) * x);
  }
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
