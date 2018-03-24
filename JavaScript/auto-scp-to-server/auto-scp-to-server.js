#!/bin/sh

rm -rdf dist \
&& npm run build \
&& find dist -name "*.map" -type f -delete \
&& scp -r ./dist <USERNAME>@<SERVER>:<YOUR/PROJECT/PATH>
