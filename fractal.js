'use strict';

const fractal = module.exports = require('@frctl/fractal').create();

fractal.set('project.title', 'Marigold');

fractal.components.set('path', __dirname + '/src/components');
fractal.components.set('default.preview', '@preview');

fractal.docs.set('path', __dirname + '/src/docs');

fractal.web.set('static.path', __dirname + '/assets');
fractal.web.set('builder.dest', __dirname + '/build');
