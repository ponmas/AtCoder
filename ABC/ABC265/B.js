//B - Explore
'use strict';

const main = (arg) => {
  //入力
  const input = arg.trim().split(/\r?\n/);
  let [n, m, t] = input[0].split(' ').map((str) => parseInt(str, 10));
  const a = input[1].split(' ').map((str) => parseInt(str, 10));
  for (let i = 2; i < m + 2; i++) {
    const [tx, ty] = input[i].split(' ').map((str) => parseInt(str, 10));
    a[tx - 1] -= ty;
  }

  let flag = true;
  for (let i = 0; i < a.length; i++) {
    // console.log(t, 'a', a[i]);
    if (t <= a[i]) {
      flag = false;
      break;
    }
    t -= a[i];
  }

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
