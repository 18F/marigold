#!/bin/bash -l
set -e
npm install 2>&1 | tee build.log
npm run build 2>&1 | tee -a build.log
cp -rf build/* .
rm -rf build
