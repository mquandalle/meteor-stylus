Package.describe({
  summary: "Expressive, dynamic, robust CSS",
  name: "mquandalle:stylus",
  version: "1.1.1",
  git: "https://github.com/mquandalle/meteor-stylus.git"
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: "0.51.1",
    "autoprefixer-stylus": "0.6.0",
    axis: "0.3.2",
    jeet: "6.1.2",
    // Latest versions of lost don't support stylus directly but rely on PostCSS
    // instead. As explained by the author in
    // https://github.com/corysimmons/lost/issues/102 the latest version with
    // direct stylus support is v5.1.6 used bellow.
    // XXX We should find a way to support v6+
    lost: "5.1.6",
    nib: "1.1.0",
    rupture: "0.6.1",
    typographic: "2.9.3"
  }
});

Package.on_test(function (api) {
  api.use(['tinytest', 'mquandalle:stylus', 'test-helpers']);
  api.add_files([
    'tests/presence.styl',
    'tests/importer.styl',
    'tests/relative.import.styl',
    'tests/absolute.import.styl',
    'tests/autoprefixer_.styl',
    'tests/axis_.styl',
    'tests/jeet_.styl',
    'tests/lost_.styl',
    'tests/nib_.styl',
    'tests/rupture_.styl',
    'tests/typographic_.styl',
    'tests/tinytest.js'
  ],'client');
});
