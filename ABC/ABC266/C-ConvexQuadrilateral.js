//C-ConvexQuadrilateral.js
'use strict';

const main = (arg) => {
  //入力
  //環境によって?改行コードが'\r\n'か'\n'になる。
  const input = arg.trim().split(/\r?\n/);
  let x = [0, 0, 0, 0];
  let y = [0, 0, 0, 0];
  let flags = [false, false, false, false];
  let flag = true;
  for (let i = 0; i < 4; i++) {
    [x[i], y[i]] = input[i].split(' ').map((str) => parseInt(str, 10));
  }

  let maxX = Math.max.apply(null, x);
  let minX = Math.min.apply(null, x);
  let maxY = Math.max.apply(null, y);
  let minY = Math.min.apply(null, y);
  let checkArray = [maxX, minX, maxY, minY];

  //凸チェック
  for (let i = 0; i < 4; i++) {
    if (x[i] == maxX || x[i] == minX) {
      flags[i] = true;
    }
    if (y[i] == maxY || y[i] == minY) {
      flags[i] = true;
    }
  }
  for (let i = 0; i < 4; i++) {
    if (
      x[i % 4] <= x[(i + 1) % 4] &&
      x[(i + 2) % 4] <= x[(i + 1) % 4] &&
      x[(i + 1) % 4] <= x[(i + 3) % 4]
    ) {
      flag = false;
    }
    if (
      x[i % 4] >= x[(i + 1) % 4] &&
      x[(i + 2) % 4] >= x[(i + 1) % 4] &&
      x[(i + 1) % 4] >= x[(i + 3) % 4]
    ) {
      flag = false;
    }
    if (
      y[i % 4] <= y[(i + 1) % 4] &&
      y[(i + 2) % 4] <= y[(i + 1) % 4] &&
      y[(i + 1) % 4] <= y[(i + 3) % 4]
    ) {
      flag = false;
    }
    if (
      y[i % 4] >= y[(i + 1) % 4] &&
      y[(i + 2) % 4] >= y[(i + 1) % 4] &&
      y[(i + 1) % 4] >= y[(i + 3) % 4]
    ) {
      flag = false;
    }
  }
  //出力
  if (flags[0] && flags[1] && flags[2] && flags[3] && flag) {
    console.log('Yes');
  } else {
    console.log('No');
  }
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
