var IngressGlyphs = require('../dist/ingress');
var fs = require('fs');
var sequences = IngressGlyphs.sequences;

var table = {};

for (var i = 0; i < sequences.length; i++) {
  var sequence = sequences[i];
  // Test for L6 and L7 portals as the majority case
  if (sequence.length === 4) {
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
    console.log('CODE:', key, sequence);
  }
}
// console.log(table);

console.log('public/sequences-lookup.json');
fs.writeFile('public/sequences-lookup.json', JSON.stringify(table, null, '  '));
