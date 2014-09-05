Package.describe({
  summary: "Expressive, dynamic, robust CSS",
  name: "mquandalle:stylus",
  version: "1.0.6",
  git: "https://github.com/mquandalle/meteor-stylus.git"
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: "0.48.1",
    nib: "1.0.3",
    jeet: "5.3.0",
    rupture: "0.4.0"
  }
});

Package.on_test(function (api) {
  api.use(['tinytest', 'mquandalle:stylus', 'test-helpers']);
  api.add_files([
    'tests/presence.styl',
    'tests/importer.styl',
    'tests/relative.import.styl',
    'tests/absolute.import.styl',
    'tests/nib_.styl',
    'tests/jeet_.styl',
    'tests/rupture_.styl',
    'tests/tinytest.js'
  ],'client');
});
