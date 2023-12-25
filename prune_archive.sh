#!/bin/bash
for FILE in *; do
    sed -i '9,20d' $FILE
    sed -i '8c\<head>' $FILE
    sed -i "$(( $(wc -l <$FILE)-24+1 )),$ d" $FILE
done
