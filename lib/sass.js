'use strict';

const Path = require('path');
const chokidar = require('chokidar');
const fs = require('fs');
const fse = require('fs-extra');
const anymatch = require('anymatch');
const sass = require('node-sass');

const log = console;

const includePattern = '**/*.scss';
const excludePattern = [
  '_*.scss',
  'node_modules/*'
];

const isEntrypoint = (filename) => {
  return anymatch(includePattern, filename)
      && !anymatch(excludePattern, filename);
};

const sassOptions = {
  includePaths: [
    Path.join(__dirname, '../node_modules/uswds/src/stylesheets')
  ]
};

const buildFile = (path) => {
  if (!isEntrypoint(path)) {
    log.log('[sass] not building:', path, '(partial)');
    return Promise.resolve(false);
  }

  const opts = Object.assign({
    file: path,
    outFile: path.replace(/\.scss$/, '.css'),
  }, sassOptions);

  return new Promise((resolve, reject) => {
    log.log('[sass] rendering:', opts.file, '=>', opts.outFile);
    sass.render(opts, (error, result) => {
      if (error) {
        log.error('[sass] render error:', error);
        reject(error);
      } else {
        fs.writeFile(opts.outFile, result.css, (error) => {
          if (error) {
            log.error('[sass] write error:', error);
            reject(error);
          } else {
            resolve();
          }
        });
      }
    });
  });
};

const buildDirectory = (path) => {
  const match = (item) => isEntrypoint(item.path);

  return new Promise(resolve => {
    const paths = [];
    log.log('[sass] building files in:', path);
    fse.walk(path)
      .on('data', item => {
        if (match(item)) {
          buildFile(item.path);
          paths.push(item.path);
        }
      })
      .on('end', () => {
        log.log('[sass] built %d files', paths.length);
        resolve(paths);
      });
  });
};

const watchDirectory = (path) => {
  const src = Path.join(path, includePattern);
  log.log('[sass] watching for changes in:', src);
  return chokidar
    .watch(src, {
      ignored: excludePattern
    })
    .on('add',    file => buildFile(file))
    .on('change', file => buildFile(file))
    .on('unlink', file => fs.unlinkSync(file));
};

module.exports = {
  buildFile: buildFile,
  buildDirectory: buildDirectory,
  watchDirectory: watchDirectory
};
