const resolvePkg = require('resolve-pkg');

module.exports = {
  engines: {
    twig: {
      namespaces: [
        {
          id: 'uikit',
          recursive: true,
          paths: [resolvePkg(`@pattern-lab/uikit-workshop/views-twig`)],
        },
        {
          id: 'atoms',
          recursive: true,
          paths: ['source/_patterns/00-atoms'],
        },
        {
          id: 'molecules',
          recursive: true,
          paths: ['source/_patterns/01-molecules'],
        },
      ],
      alterTwigEnv: [
        {
          file: 'alter-twig.php',
          functions: ['addCustomExtension'],
        },
      ],
    },
  },
  cacheBust: true,
  cleanPublic: true,
  defaultPattern: 'all',
  defaultShowPatternInfo: false,
  ishControlsHide: {
    s: false,
    m: false,
    l: false,
    full: false,
    random: false,
    disco: false,
    hay: true,
    mqs: false,
    find: false,
    'views-all': false,
    'views-annotations': false,
    'views-code': false,
    'views-new': false,
    'tools-all': false,
    'tools-docs': false,
  },
  ishViewportRange: {
    s: [240, 500],
    m: [500, 800],
    l: [800, 2600],
  },
  logLevel: 'info',
  outputFileSuffixes: {
    rendered: '.rendered',
    rawTemplate: '',
    markupOnly: '.markup-only',
  },
  paths: {
    source: {
      root: './source/',
      patterns: './source/_patterns/',
      data: './source/_data/',
      meta: './source/_meta/',
      annotations: './source/_annotations/',
      styleguide: 'dist/',
      patternlabFiles: {
        'general-header':
          '../uikit-workshop/views/partials/general-header.mustache',
        'general-footer':
          '../uikit-workshop/views/partials/general-footer.mustache',
        patternSection:
          '../uikit-workshop/views/partials/patternSection.mustache',
        patternSectionSubtype:
          '../uikit-workshop/views/partials/patternSectionSubtype.mustache',
        viewall: '../uikit-workshop/views/viewall.mustache',
      },
      js: './source/js',
      images: './source/images',
      fonts: './source/fonts',
      css: './source/css',
    },
    public: {
      root: 'public/',
      patterns: 'public/patterns/',
      data: 'public/styleguide/data/',
      annotations: 'public/annotations/',
      styleguide: 'public/styleguide/',
      js: 'public/js',
      images: 'public/images',
      fonts: 'public/fonts',
      css: 'public/css',
    },
  },
  patternExtension: 'twig',
  patternStateCascade: ['inprogress', 'inreview', 'complete'],
  patternExportDirectory: './pattern_exports/',
  patternExportPatternPartials: [],
  serverOptions: {
    wait: 1000,
  },
  starterkitSubDir: 'dist',
  styleGuideExcludes: [],
  theme: {
    color: 'light',
    density: 'compact',
    layout: 'horizontal',
  },
  uikits: [
    {
      name: 'uikit-workshop',
      outputDir: '',
      enabled: true,
      excludedPatternStates: [],
      excludedTags: [],
    },
  ],
};