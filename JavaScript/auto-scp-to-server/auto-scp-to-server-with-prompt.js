#!/bin/sh

echo "该脚本会执行build并将dist文件上传到master"
echo "确定部署代码到master环境吗？ （Y/n）"

read confirm

if [[ "$confirm" == "Y" || "$confirm" == "y" ]]
then
    rm -rdf dist \
    && npm run build \
    && find dist -name "*.map" -type f -delete \
    && scp -r ./dist <USERNAME>@<SERVER>:<YOUR/PROJECT/PATH>
else
    echo "取消部署"
fi
