//B-Split
'use strict';

const main = (arg) => {
  //入力
  //環境によって?改行コードが'\r\n'か'\n'になる。
  const input = arg.trim().split(/\r?\n/);
  let S = input[0];
  //let rane = [0, 0, 0, 0, 0, 0, 0];
  if (parseInt(S[0]) == 1) {
    console.log('No');
  } else {
    let rane = '';
    rane += parseInt(S[6]).toString(10);
    rane += parseInt(S[3]).toString(10);
    rane += (parseInt(S[1]) + parseInt(S[7])).toString(10);
    rane += (parseInt(S[0]) + parseInt(S[4])).toString(10);
    rane += (parseInt(S[2]) + parseInt(S[8])).toString(10);
    rane += parseInt(S[5]).toString(10);
    rane += parseInt(S[9]).toString(10);

    let out = rane.split('0');

    var result = out.filter(function (ok) {
      return ok.length != 0;
    });

    //出力
    if (result.length < 2) {
      console.log('No');
    } else {
      console.log('Yes');
    }
  }
};

//提出用
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));

//テスト用
main(require('fs').readFileSync('test.txt', 'utf8'));
