//C - Submask

'use strict';

const main = (arg) => {
  //入力
  const input = arg.trim().split(/\r?\n/);
  let n = BigInt(input[0]);
  let n_array = new Array();
  let count = 1n;
  for (let i = 1; n != 0n; i++) {
    if (n % 2n == 1n) {
      n_array.push(BigInt(count));
    }
    n /= 2n;
    count *= 2n;
  }

  for (let bit = 0; bit < 1 << n_array.length; bit++) {
    let row = [];
    for (let i = 0; i < n_array.length; i++) {
      if (bit & (1 << i)) {
        row.push(i);
      }
    }

    let ans = 0n;
    for (let l of row) {
      ans += n_array[l];
    }
    console.log(ans.toString());
  }
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
