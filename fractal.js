'use strict';

const fractal = module.exports = require('@frctl/fractal').create();

const theme = require('@frctl/mandelbrot')({
  skin: 'white'
});

fractal.web.theme(theme);

fractal.set('project.title', 'Marigold');

// these values are merged into each component's context data
fractal.components.set('default.context', {
  asset_path: '../../assets/'
});

// use Nunjucks as the templating engine
fractal.components.engine(require('@frctl/nunjucks')({
  filters: require('./lib/template-filters')
}));

const src = __dirname + '/src';

fractal.components.set('ext', '.njk');
fractal.components.set('path', src + '/components');
fractal.components.set('default.preview', '@base');

fractal.docs.set('path', src + '/docs');

fractal.web.set('static.path', src + '/assets');
fractal.web.set('static.mount', 'assets');

fractal.web.set('builder.dest', __dirname + '/build');
