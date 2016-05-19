# Background

This provides a list of canonical names for each of the core glyphs used
in glyph hacking sequences that can be consumed without dedencies.

# Installation<a id="sec-2" name="sec-2"></a>

    npm install
    npm build
    npm test

This runs code coverage against the unit tests and creates the ES4
module that can be consumed by Browserify.

# Usage

## node

    var ingress = require('@jwalsh/ingress-glyphs');
    
    console.log('Glyphs: ', Object.keys(ingress.glyphs).length);
    console.log('Aliases: ', Object.keys(ingress.aliases).length);
    console.log('Sequences: ', Object.keys(ingress.sequences).length);

## web

    <script src="http://p.wal.sh/ingress/ingress.js"></script>
    <script>
      console.log(ingress);
    </script>

# Example

## Glyphs

![img](./example/public/abandon.png)
![img](./example/public/accept.png)
![img](./example/public/adapt.png)
![img](./example/public/advance.png)
![img](./example/public/after.png)
![img](./example/public/again.png)
![img](./example/public/all.png)
![img](./example/public/answer.png)
![img](./example/public/attack.png)
![img](./example/public/avoid.png)
![img](./example/public/barrier.png)
![img](./example/public/before.png)
![img](./example/public/begin.png)
![img](./example/public/body.png)
![img](./example/public/breathe.png)
![img](./example/public/capture.png)
![img](./example/public/change.png)
![img](./example/public/chaos.png)
![img](./example/public/chase.png)
![img](./example/public/civilization.png)
![img](./example/public/clear.png)
![img](./example/public/clear_all.png)
![img](./example/public/complex.png)
![img](./example/public/conflict.png)
![img](./example/public/consequence.png)
![img](./example/public/contemplate.png)
![img](./example/public/courage.png)
![img](./example/public/create.png)
![img](./example/public/creativity.png)
![img](./example/public/danger.png)
![img](./example/public/data.png)
![img](./example/public/defend.png)
![img](./example/public/destination.png)
![img](./example/public/destiny.png)
![img](./example/public/destroy.png)
![img](./example/public/deteriorate.png)
![img](./example/public/die.png)
![img](./example/public/difficult.png)
![img](./example/public/discover.png)
![img](./example/public/easy.png)
![img](./example/public/end.png)
![img](./example/public/enlightened.png)
![img](./example/public/enlightenment.png)
![img](./example/public/equal.png)
![img](./example/public/escape.png)
![img](./example/public/evolution.png)
![img](./example/public/failure.png)
![img](./example/public/fear.png)
![img](./example/public/follow.png)
![img](./example/public/forget.png)
![img](./example/public/future.png)
![img](./example/public/gain.png)
![img](./example/public/grow.png)
![img](./example/public/harm.png)
![img](./example/public/harmony.png)
![img](./example/public/have.png)
![img](./example/public/help.png)
![img](./example/public/hide.png)
![img](./example/public/human.png)
![img](./example/public/i.png)
![img](./example/public/idea.png)
![img](./example/public/ignore.png)
![img](./example/public/imperfect.png)
![img](./example/public/improve.png)
![img](./example/public/impure.png)
![img](./example/public/intelligence.png)
![img](./example/public/interrupt.png)
![img](./example/public/journey.png)
![img](./example/public/knowledge.png)
![img](./example/public/lead.png)
![img](./example/public/legacy.png)
![img](./example/public/less.png)
![img](./example/public/liberate.png)
![img](./example/public/lie.png)
![img](./example/public/lose.png)
![img](./example/public/message.png)
![img](./example/public/mind.png)
![img](./example/public/more.png)
![img](./example/public/mystery.png)
![img](./example/public/nature.png)
![img](./example/public/new.png)
![img](./example/public/not.png)
![img](./example/public/nourish.png)
![img](./example/public/old.png)
![img](./example/public/open_all.png)
![img](./example/public/outside.png)
![img](./example/public/past.png)
![img](./example/public/path.png)
![img](./example/public/perfection.png)
![img](./example/public/perspective.png)
![img](./example/public/portal.png)
![img](./example/public/potential.png)
![img](./example/public/presence.png)
![img](./example/public/present.png)
![img](./example/public/pure.png)
![img](./example/public/pursue.png)
![img](./example/public/question.png)
![img](./example/public/react.png)
![img](./example/public/rebel.png)
![img](./example/public/recharge.png)
![img](./example/public/reduce.png)
![img](./example/public/reincarnate.png)
![img](./example/public/resist.png)
![img](./example/public/resistance.png)
![img](./example/public/restraint.png)
![img](./example/public/retreat.png)
![img](./example/public/safety.png)
![img](./example/public/save.png)
![img](./example/public/search.png)
![img](./example/public/see.png)
![img](./example/public/self.png)
![img](./example/public/separate.png)
![img](./example/public/shaper_human.png)
![img](./example/public/shapers.png)
![img](./example/public/share.png)
![img](./example/public/simple.png)
![img](./example/public/soul.png)
![img](./example/public/stay.png)
![img](./example/public/strong.png)
![img](./example/public/technology.png)
![img](./example/public/together.png)
![img](./example/public/truth.png)
![img](./example/public/unbounded.png)
![img](./example/public/use.png)
![img](./example/public/victory.png)
![img](./example/public/want.png)
![img](./example/public/we.png)
![img](./example/public/weak.png)
![img](./example/public/worth.png)
![img](./example/public/xm.png)
![img](./example/public/you.png)

## Sequences

| recharge present recharge human soul | ![recharge](./example/public/recharge.png)![present](./example/public/present.png)![recharge](./example/public/recharge.png)![human](./example/public/human.png)![soul](./example/public/soul.png) |
| want truth pursue difficult path | ![want](./example/public/want.png)![truth](./example/public/truth.png)![pursue](./example/public/pursue.png)![difficult](./example/public/difficult.png)![path](./example/public/path.png) |
| strong together attack together chaos | ![strong](./example/public/strong.png)![together](./example/public/together.png)![attack](./example/public/attack.png)![together](./example/public/together.png)![chaos](./example/public/chaos.png) |
| strong together attack together destiny | ![strong](./example/public/strong.png)![together](./example/public/together.png)![attack](./example/public/attack.png)![together](./example/public/together.png)![destiny](./example/public/destiny.png) |
| react rebel question shapers lie | ![react](./example/public/react.png)![rebel](./example/public/rebel.png)![question](./example/public/question.png)![shapers](./example/public/shapers.png)![lie](./example/public/lie.png) |

# Data

This pulls in data from:

-   <https://github.com/ento/ingress-shaper-glyphs/tree/master/src>
-   <http://glyphtionary.com/>
-   <http://www.ingress.tv/5-glyph-hack-sequences.html>
