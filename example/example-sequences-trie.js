var IngressGlyphs = require('../dist/ingress');
var fs = require('fs');
var sequences = IngressGlyphs.sequences;

var trie = {};
for (var i = 0; i < sequences.length; i++) {
  var sequence = sequences[i],
      cur = trie;
  for (var j = 0; j < sequence.length; j++) {
    var glyph = sequence[j], pos = cur[glyph];
    if (pos == null) {
      cur = cur[glyph] = j === sequence.length - 1 ? 0 : {};
    } else if (pos === 0) {
      cur = cur[glyph] = { $: 0 };
    } else {
      cur = cur[glyph];
    }
  }
}

console.log('public/sequences.json');
fs.writeFile('public/sequences.json', JSON.stringify(trie, null, '  '));
