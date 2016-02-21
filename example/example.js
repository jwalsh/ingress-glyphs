var Canvas = require('canvas'),
    Image = Canvas.Image,
    size = 40,
    canvas = new Canvas(size, size),
    ctx = canvas.getContext('2d');
var fs = require('fs');

var ingress = require('../dist/ingress').ingress;

// Layout

// [[ , , 0, , ],
//  [5, ,  , ,1],
//  [ ,9,  ,6, ],
//  [ , ,10, , ],
//  [ ,8,  ,7, ],
//  [4, ,  , ,2],
//  [ , , 3, , ]]

// center
var c = { t: size / 2, l: size / 2 };
// radius
var r = size / 2.;

// positions
var positions = [];
// center
positions[10] = [c.l, c.t];
// hexagram
for (var i = 0; i < 6; i++) {
  var p = {l: c.l + r * Math.sin(2 * Math.PI * i / 6),
    t: c.t - r * Math.cos(2 * Math.PI * i / 6) };
  positions[i] = [p.l, p.t];
}
var w = positions[1][0] - c.l;
var h = c.l - positions[1][1];
// centered rectangle
positions[9] = [c.l - w / 2, c.t - h / 2];
positions[6] = [c.l + w / 2, c.t - h / 2,];
positions[7] = [c.l + w / 2, c.t + h / 2];
positions[8] = [c.l - w / 2, c.t + h / 2];

// console.log(positions);

// globals: size, ctx
var render = function(glyph) {
  // console.log(glyph);
  // Base
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'rgba(0,0,0.1,0.1)';
  ctx.fillRect(0, 0, size, size);
  // Border
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (var i = 0; i <= 4; i++) {
    ctx.moveTo(positions[i][0], positions[i][1]);
    ctx.lineTo(positions[i + 1][0], positions[i + 1][1]);
  }
  ctx.moveTo(positions[5][0], positions[5][1]);
  ctx.lineTo(positions[0][0], positions[0][1]);
  ctx.stroke();
  // Glyph
  ctx.strokeStyle = 'rgba(0,0,0,0.3)';
  ctx.lineWidth = 2;
  ctx.beginPath();

  // Partition into the two nodes
  var code = glyph.code.match(/.{1,2}/g);
  for (var i = 0; i < code.length; i++) {
    var start = parseInt(code[i].split('')[0], 16);
    var end = parseInt(code[i].split('')[1], 16);
    ctx.beginPath();
    ctx.moveTo(positions[start][0], positions[start][1]);
    ctx.lineTo(positions[end][0], positions[end][1]);
    ctx.stroke();
  }
  // fs.writeFile('example.png', canvas.toBuffer());
  fs.writeFile('public/' + glyph.canonical + '.png', canvas.toBuffer());
};

// Abandon
// render({
//   'canonical': 'abandon',
//   'name': 'Abandon',
//   'code': '1634486a8a',
//   'aliases': [],
//   'sequences': 0
// });

var html = '';
// console.log(ingress.glyphs);
Object.keys(ingress.glyphs).map(function(e, i, c) {
  var glyph = ingress.glyphs[e];
  render(glyph);
  html += '<img src="' + glyph.canonical + '.png" title="' +
    glyph.canonical + '" />';
});

fs.writeFile('public/example.html', html);

// console.log(ingress.sequences);
ingress.sequences
  .filter(function(e, i, c) {
    return e.length === 5;
  })
  .map(function(e, i, c) {
    // console.log(e);
    h = '| ';
    h += e.join(' ')
    h += ' | ';
    h += e.reduce(function(a, b) {
      if (ingress.aliases[b]) {
        // console.log('INFO', b, '=', ingress.aliases[b]);
        b = ingress.aliases[b];
      }
      return a + '[[./example/public/' + b +  '.png]]';
    }, '');
    h += ' |';
    console.log(h);
});
