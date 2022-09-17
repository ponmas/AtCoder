//B - Rectangle Detection

'use strict';

const main = (arg) => {
  //入力
  const input = arg.trim().split(/\r?\n/);

  let a, b, c, d;

  for (let i in input) {
    if (input[i].indexOf('#') != -1) {
      a = parseInt(i);
      break;
    }
  }
  for (let i in input) {
    if (input[i].indexOf('#') != -1) {
      b = parseInt(i);
    }
  }
  c = input[a].indexOf('#');
  d = input[a].indexOf('.', input[a].lastIndexOf('#'));

  a += 1;
  b += 1;
  c += 1;
  if (d == -1) d = 10;
  //出力
  console.log(a + ' ' + b);
  console.log(c + ' ' + d);
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
