#!/bin/bash
set -e
unset PREFIX
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
npm install 2>&1 | tee build.log
npm run build 2>&1 | tee -a build.log
cp -rf build/* .
rm -rf build
