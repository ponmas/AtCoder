'use strict';

const main = (arg) => {
  //入力
  //環境によって?改行コードが'\r\n'か'\n'になる。
  const input = arg.trim().split(/\r?\n/);
  let S = input[0];
  let ans = 0;
  switch (S) {
    case 'Monday':
      ans = 5;
      break;
    case 'Tuesday':
      ans = 4;
      break;
    case 'Wednesday':
      ans = 3;
      break;
    case 'Thursday':
      ans = 2;
      break;
    case 'Friday':
      ans = 1;
      break;
  }

  //出力
  console.log(ans);
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
