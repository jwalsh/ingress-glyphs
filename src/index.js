const fs = require('fs');
const parse = require('csv-parse');
const esprima = require('esprima');
const escodegen = require('escodegen');

const glyphs = {};
const aliases = {};
const sequences = [];

const glyphsParser = parse({}, (err, data) => {
  // console.log(data)
  data.map((e, i, c) => {
    if (i > 0) {

      const glyph = {
        canonical: e[0],
        name: e[2],
        code: e[1],
        aliases: [],
        sequences: 0
      };
      glyphs[e[0]] = glyph;
    }
  });
  console.log('glyphs done');

  });

  const aliasesParser = parse({}, (err, data) => {
    // console.log(data)
    data.map((e, i, c) => {
      if (i > 0) {
        let alias = e[0];
        const glyph = glyphs[e[1]];
        //        console.log('Matching', alias, glyph)
        if (glyph) {
          aliases[alias] = glyph.canonical;
          glyph.aliases.push(alias);
        } else {
          console.log('Error', e[0]);
        }
      }
    });
    console.log('aliases done');

  });

  const sequencesParser = parse({}, (err, data) => {
    // console.log(data)
    data.map((e, i, c) => {
      if (i > 0) {
        sequences.push(e);
        for (let j = 0; j < e.length; j++) {
          const alias = aliases[e[j]];
          const glyph = glyphs[e[j]];
          if (alias) {
            glyphs[alias].sequences++;
          } else if (glyph) {
            // console.log('Matching', glyph)
            glyph.sequences++;
          } else {
            console.log(`No match: ${e[i]}`);
          }
        }
      }
    });
    console.log('sequences done');
    const result = {
      glyphs: glyphs,
      aliases: aliases,
      sequences: sequences
    };
    // console.log(result);
    let code = 'exports = ';
    code += JSON.stringify(result);
    const parsed = esprima.parse(code);
    const generated = escodegen.generate(parsed);
    const wstream = fs.createWriteStream(`${__dirname}/../dist/ingress.js`);
    wstream.write(generated);
    wstream.end();
    console.log('dist/ingress.js');
  });



fs.createReadStream(`${__dirname}/../data/glyphs.csv`).pipe(glyphsParser);
fs.createReadStream(`${__dirname}/../data/aliases.csv`).pipe(aliasesParser);
fs.createReadStream(`${__dirname}/../data/sequences.csv`).pipe(sequencesParser);
