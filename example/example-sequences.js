var fs = require('fs');
var ingress = require('../dist/ingress');

var seqorg = [1, 2, 3, 4, 5]
      .map(function(e, i, c) {
        return '\n* ' + e + '' + '\n' +
          ingress
          .sequences
          .filter(function(a) {
            return a.length === e;
          })
          .map(function(e, i, c) {
            // console.log(e);
            h = '| ';
            h += e.join(' ');
            h += ' | ';
            h += e.reduce(function(a, b) {
              if (ingress.aliases[b]) {
                // console.log('INFO', b, '=', ingress.aliases[b]);
                b = ingress.aliases[b];
              }
              return a + '[[./' + b +  '.png]]';
            }, '');
            h += ' |';
            // console.log(h);
            return h;
          })
          .join('\n');
      })
      .join(' ');

console.log('public/sequences.org');
fs.writeFile('public/sequences.org', seqorg);
