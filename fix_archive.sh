#!/bin/bash

for FILE in *; do
    sed -E 's%/web/[0-9]+(?:[cj]s_)?/http://www\.puritytest\.net(.*)%\1%' $FILE
done
