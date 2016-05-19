var Canvas = require('canvas'),
    Image = Canvas.Image,
    size = 40;
var fs = require('fs');

var ingress = require('../dist/ingress');

// console.log(ingress);

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
  var canvas = new Canvas(size, size);
  var ctx = canvas.getContext('2d');

  // Base
  ctx.beginPath();
  ctx.globalAlpha = 0;
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'rgba(0,0,0.1,0.05)';
  ctx.fillRect(0, 0, size, size);
  // Border
  ctx.globalAlpha = .9;
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

// Sample rendering
//console.log('Glyph: journey');
//render(ingress.glyphs['journey']);

var html = '<body bgcolor="red">';
// console.log(ingress.glyphs);
Object.keys(ingress.glyphs).map(function(e, i, c) {
  var glyph = ingress.glyphs[e];
  console.log(glyph);
  render(glyph);
  html += '<img src="' + glyph.canonical + '.png" title="' +
    glyph.canonical + '" />';
});

console.log('public/example.html');
fs.writeFile('public/example.html', html);
