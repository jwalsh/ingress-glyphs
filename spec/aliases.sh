#!/bin/sh

# Purpose: Rough summary of the utilization of the alias against the
# primary glyph as used in the sequences

# Expect: The canonical glyph should be used more often than the alias

for L in `grep -v key,canonical  aliases.csv | cut -d ',' -f 1,2`
do
    A=$(echo $L | cut -f 1 -d ',')
    C=$(echo $L | cut -f 2 -d ',')
    echo
    echo $L
    grep [,^]$A[,$] sequences.csv | wc -l
    grep [,^]$C[,$] sequences.csv | wc -l
 done
