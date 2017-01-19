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
fractal.components.set('default.status', 'hypothesis');
fractal.components.set('statuses', {
  hypothesis: {
    label: "Hypothesis",
    description: "User need has been identified, but the approach to solving the problem has not yet been decided. Team has decided to tackle this UI pattern. The pattern has been listed in the public roadmap.",
    color: "#e31c3d"
  },
  proposed: {
    label: "Proposed",
    description: "Identifies what user need the pattern solves. Lists alternative patterns that support this user need. Includes a rendering of the design. Describes any primary or secondary research that supports this pattern",
    color: "#fdb81e"
  },
  alpha: {
    label: "Alpha",
    description: "The pattern has passed all heuristic assessments. No secondary research that would explicitly reject the pattern has surfanced.",
    color: "#02bfe7"
  },
  beta: {
    label: "Beta",
    description: "Pattern is generally usable, on multiple devices, for people with relatively “normal” digital literacy. Pattern works in multiple configurations with other components. First draft of documentation is written.",
    color: "#205493"
  },
  recommended: {
    label: "Recommended",
    description: "Pattern is usable, on multiple devices, by people with multiple disabilities and pattern is documented including context of use rationale.",
    color: "#2e8540"
  },
  deprecated: {
    label: "Deprecated",
    description: "Pattern has been removed from the pattern library, design stencils and marked deprecated in release notes.",
    color: "#5b616b"
  }
});

fractal.docs.set('path', src + '/docs');

fractal.web.set('static.path', src + '/assets');
fractal.web.set('static.mount', 'assets');

fractal.web.set('builder.dest', __dirname + '/build');

if (command === 'build') {
  sass.buildDirectory(src);
} else if (command === 'start') {
  sass.watchDirectory(src);
}
