tr ',' '\n' < sequences.csv  | sort  | uniq > s
cut -d , -f 1 glyphs.csv  | sort | uniq > g
for INS in $(diff g s | grep '> ' | sed -e 's#^> ##'); do echo $INS sb. in aliases; grep $INS aliases.csv; done
