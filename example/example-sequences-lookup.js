var IngressGlyphs = require('../dist/ingress');
var fs = require('fs');
var sequences = IngressGlyphs.ingress.sequences;

var table = {};

for (var i = 0; i < sequences.length; i++) {
  var sequence = sequences[i];
  if (sequence.length >= 4) {
    var key = sequence
          .join(' ')
          .match(/\b(\w)/g)
          .join('');
    var m = table[key];
    if (m)  {
      m.push(key);
    } else {
      m = [sequence];
    }
    table[key] = m;
  }
}
// console.log(table);

console.log('public/sequences-lookup.json');
fs.writeFile('public/sequences-lookup.json', JSON.stringify(table, null, '  '));
