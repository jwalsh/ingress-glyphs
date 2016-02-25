#!/bin/sh

# Purpose: Rough summary of the utilization of the alias against the
# primary glyph as used in the sequences

# Expect: The canonical glyph should be used more often than the alias

# WARN: canonical not 6 less than inside 12
# WARN: canonical breathe 1 less than live 2
# WARN: canonical data 4 less than message 9
# WARN: canonical accept 2 less than open 5
# WARN: canonical recharge 1 less than repair 3
# WARN: canonical resist 0 less than resistance 6
# WARN: canonical search 1 less than seek 2
# WARN: canonical stay 1 less than stability 4
# WARN: canonical we 0 less than us 2
# WARN: canonical you 0 less than your 2

for L in `grep -v key,canonical  data/aliases.csv | cut -d ',' -f 1,2`
do
    # alias
    A=$(echo $L | cut -f 1 -d ',')
    # canonical
    C=$(echo $L | cut -f 2 -d ',')
    # echo
    # echo $L
    AC=$(grep [,^]$A[,$] data/sequences.csv | wc -l)
    CC=$(grep [,^]$C[,$] data/sequences.csv | wc -l)
    # warn if the alias is used more often than the canonical
    if [ $AC -gt $CC ]
    then
        echo WARN: canonical $C $CC less than $A $AC
    fi
 done
