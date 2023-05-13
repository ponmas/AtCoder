const pname = [
  ['tsuda', 'daiki'],
  ['ikeda', 'kantaro'],
  ['honda', 'kento'],
];
const input = 'ikeda';

for (var i = 0; i < pname.length; i++) {
  if (pname[i][0] === input) {
    console.log(pname[i][1]);
  }
}
