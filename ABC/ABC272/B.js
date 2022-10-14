//B-Everyone is Friends.js

'use strict';

const main = (arg) => {
  //入力
  const input = arg.trim().split(/\r?\n/);
  const [n, m] = input[0].split(' ').map((str) => parseInt(str, 10));
  var arr = new Array(n);
  for (var b = 0; b < n; b++) {
    arr[b] = new Array(n);
    for (var a = 0; a < n; a++) {
      arr[b][a] = 0;
    }
  }
  let ans = 0;
  let flag = 1;

  for (let i = 0; i < m; i++) {
    let [k, ...data] = input[i + 1].split(' ').map((str) => parseInt(str, 10));
    //console.log(k, data);
    for (let j = 0; j < k; j++) {
      for (let kk = j + 1; kk < k; kk++) {
        //console.log(data[j], data[kk]);
        if (j < kk) {
          arr[data[j] - 1][data[kk] - 1] = 1;
        } else {
          arr[data[kk] - 1][data[j] - 1] = 1;
        }
      }
    }
  }

  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (arr[j][k] == 0) flag = false;
    }
  }

  //出力
  if (flag) {
    console.log('Yes');
  } else {
    console.log('No');
  }
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
