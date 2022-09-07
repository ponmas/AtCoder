//A-MiddleLetter
'use strict';

const main = (arg) => {
  //入力
  const S = arg.trim();

  //出力
  let n = Math.floor((S.length + 1) / 2) - 1;
  console.log(S[n]);
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
