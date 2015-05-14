var fs = Npm.require('fs');
var stylus = Npm.require('stylus');
var autoprefixer = Npm.require('autoprefixer-stylus');
var axis = Npm.require('axis');
var nib = Npm.require('nib');
var jeet = Npm.require('jeet');
var lost = Npm.require('lost');
var rupture = Npm.require('rupture');
var typographic = Npm.require('typographic');
var path = Npm.require('path');
var Future = Npm.require('fibers/future');

Plugin.registerSourceHandler("styl", {archMatching: 'web'}, function (compileStep) {
  var source = compileStep.read().toString('utf8');
  var compiler = stylus(source)
    .use(autoprefixer())
    .use(axis())
    .use(nib())
    .use(jeet())
    .use(lost())
    .use(rupture())
    .use(typographic())
    .set('filename', compileStep.inputPath)
    .set('sourcemap', { comment: false })
    .include(path.dirname(compileStep._fullInputPath)) // relative @import
    .include(process.cwd()); // absolute @import

  var errCb = function(msg) {
    compileStep.error({
      message: "Stylus compiler error: " + msg
    });
  };

  try {
    compiler.render(function (err, css) {
      if (err) {
        return errCb(err.message);
      }
      var sourceMap = compiler.sourcemap;
      sourceMap.sourcesContent = [source];
      compileStep.addStylesheet({
        path: compileStep.inputPath + ".css",
        data: css,
        sourceMap: JSON.stringify(sourceMap)
      });
    });
  } catch(err) {
    errCb(err.message);
  }
});

// Register import.styl files with the dependency watcher, without actually
// processing them. There is a similar rule in the less package.
Plugin.registerSourceHandler("import.styl", function () {});
