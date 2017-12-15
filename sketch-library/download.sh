#!/bin/sh

# Pull the latest changes from the repo
git pull

files="18F-design-system-library" # add a new file like this: "file1 file2 file3"
for f in $files
do
  # Zip core Sketch data
  cd $f/ && zip $f.zip -r .

  # Copy .zip to .sketch
  cp $f.zip ../$f.sketch

  # Remove zip
  rm -Rf $f.zip && cd ..
done
