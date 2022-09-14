//A-FiveIntegers
'use strict';

const main = (arg) => {
  //入力
  const input = arg.trim().split(/\r?\n/);
  const data = input[0].split(' ').map((str) => parseInt(str, 10));

  const array = [data[0]];
  for (let i = 1; i < data.length; i++) {
    if (array.indexOf(data[i]) == -1) {
      array.push(data[i]);
    }
  }

  //出力
  console.log(array.length);
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
