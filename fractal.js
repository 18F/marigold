'use strict';

const fractal = module.exports = require('@frctl/fractal').create();

const sass = require('./lib/sass');

// XXX detect the CLI command
const command = process.argv[2];

const src = __dirname + '/src';

fractal.set('project.title', 'Marigold');

// use Nunjucks as the templating engine
fractal.components.engine(require('@frctl/nunjucks')({
  filters: require('./lib/template-filters')
}));

fractal.components.set('ext', '.njk');
fractal.components.set('path', src + '/components');
fractal.components.set('default.preview', '@base');

fractal.docs.set('path', src + '/docs');
fractal.docs.set('default.status', 'alpha');
fractal.docs.set('statuses', {
    alpha: {
        label: "Alpha",
        description: "First draft of documentation is written.",
        color: '#02bfe7'
    },
    beta: {
        label: "Beta",
        description: "Documentation has been reviewed and needs final evaluation before recommended.",
        color: "#205493"
    },
    recommended: {
        label: "Recommended",
        description: "Documentation, including context of use rationale, is complete.",
        color: "2e8540"
    }
});


fractal.web.set('static.path', src + '/assets');
fractal.web.set('static.mount', 'assets');

fractal.web.set('builder.dest', __dirname + '/build');

if (command === 'build') {
  sass.buildDirectory(src);
} else if (command === 'start') {
  sass.watchDirectory(src);
}
