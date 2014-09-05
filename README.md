# Stylus for Meteor

[Stylus](http://learnboost.github.io/stylus) is a CSS pre-processor with a
simple syntax and expressive dynamic behaviour. It allows for more compact
stylesheets and helps reduce code duplication in CSS files.

With the stylus package installed, `.styl` files in your application are
automatically compiled to CSS and the results are included in the client CSS
bundle along with the corresponding source map in development environment.

## Imports

If you want to `@import` a file, give it the extension `.import.styl` to prevent
Meteor from processing it independently.

This packages suppports both relative and absolute `@import`. Absolute `@import`
are relative to your root meteor application directory, you shouldn't precede
its path by `/`.

## Plugins

The package supports the following libraries:

* **[nib](http://visionmedia.github.io/nib/)**: a set of cross-browser mixins
* **[jeet](http://jeet.gs/)**: a grid system
* **[rupture](http://jenius.github.io/rupture)**: simple media queries

To use these, add `@import 'nib'`, `@import 'jeet'` or `@import 'rupture'` on
top of your stylus stylesheet.
