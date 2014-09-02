var fs = Npm.require('fs');
var stylus = Npm.require('stylus');
var nib = Npm.require('nib');
var path = Npm.require('path');
var Future = Npm.require('fibers/future');

Plugin.registerSourceHandler("styl", {archMatching: 'web'}, function (compileStep) {
  var source = compileStep.read().toString('utf8');
  var compiler = stylus(source)
    .use(nib())
    .set('filename', compileStep.inputPath)
    .set('sourcemap', {comment: false})
    // Include needed to allow relative @imports in stylus files
    .include(path.dirname(compileStep._fullInputPath));

  compiler.render(function (err, css) {
    if (err) {
      compileStep.error({
        message: "Stylus compiler error: " + e.message
      });
    } else {
      var sourceMap = compiler.sourcemap;
      sourceMap.sourcesContent = [source];
      compileStep.addStylesheet({
        path: compileStep.inputPath + ".css",
        data: css,
        sourceMap: JSON.stringify(sourceMap)
      });
    }
  });
});

// Register import.styl files with the dependency watcher, without actually
// processing them. There is a similar rule in the less package.
Plugin.registerSourceHandler("import.styl", function () {
  // Do nothing
});

