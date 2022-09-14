//B-Prefix

'use strict';

const main = (arg) => {
  //入力
  const input = arg.trim().split(/\r?\n/);
  let s, t;
  [s, t] = input;

  //出力
  if (t.indexOf(s) == 0) {
    console.log('Yes');
  } else {
    console.log('No');
  }
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
