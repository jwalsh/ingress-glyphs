var Canvas = require('canvas'),
    Image = Canvas.Image,
    canvas = new Canvas(size, size),
    ctx = canvas.getContext('2d');
var fs = require('fs');

var ingress = require('../dist/ingress');

// Glyphs follow

// Layout

// [[ , , 0, , ],
//  [5, ,  , ,1],
//  [ ,9,  ,6, ],
//  [ , ,10, , ],
//  [ ,8,  ,7, ],
//  [4, ,  , ,2],
//  [ , , 3, , ]]


// size
var size = 40;
// center
var c = { t: size / 2, l: size / 2 };
// radius
var r = c.t / 1.2;

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

console.log(positions);


var render = function(glyph) {
  // console.log(example)
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, size, size);
  ctx.beginPath();

  // Partition into the two nodes
  var code = glyph.code.match(/.{1,2}/g);
  for (var i = 0; i < code.length; i++) {
    var start = parseInt(code[i].split('')[0], 16);
    var end = parseInt(code[i].split('')[1], 16);
    ctx.beginPath();
    ctx.moveTo(positions[start][0] + 4, positions[start][1] - 4);
    ctx.lineTo(positions[end][0] + 4, positions[end][1] - 4);
    ctx.stroke();
  }
  // fs.writeFile('example.png', canvas.toBuffer());
  fs.writeFile('public/' + glyph.canonical + '.png', canvas.toBuffer());
};

// Abandon
render({
  'canonical': 'abandon',
  'name': 'Abandon',
  'code': '1634486a8a',
  'aliases': [],
  'sequences': 0
});
