# Stylus for Meteor [![Build Status][travis-img]][travis-url]

[Stylus](http://stylus-lang.com/) is a CSS pre-processor with a
simple syntax and expressive dynamic behaviour. It allows for more compact
stylesheets and helps reduce code duplication in CSS files.

With the stylus package installed, `.styl` files in your application are
automatically compiled to CSS and the results are included in the client CSS.

## Source Maps

This package also automatically provide source map in the development
environment, so that you can read your original stylus file in the debugger
tools of the browser.

## Imports

If you want to `@import` a file, give it the extension `.import.styl` to prevent
Meteor from processing it independently.

This packages supports both relative and absolute `@import`. Absolute `@import`
are relative to your root meteor application directory, you shouldn't precede
its path by `/`.

## Included packages

### [Stylus](http://stylus-lang.com/) 0.51.1

Expressive, dynamic, robust CSS. Curly braces and semicolons: optional.

### [Nib](http://tj.github.io/nib/) 1.1.0

Nib is a popular Stylus package that adds many helpful, basic, utility mixins.

### [Jeet](http://jeet.gs/) 6.1.2

An advanced -- yet intuitive -- grid system. Very capable, and useful for laying
out a page without cluttering up HTML with grid classes.

It's important to remember to include it in your styles, like so:

```
@import 'jeet'
```

### [Rupture](http://jenius.github.io/rupture/) 0.6.1

Simple media queries for Stylus. Must be imported before use.

### [Typographic](https://github.com/corysimmons/typographic) 2.9.3

Quick and dirty responsive typography for the rest of us. Offers great selection
of common font stacks, and several ways to apply them to your document. Must be
imported before use.

### [Axis](http://axis.netlify.com/) 0.3.2

A higher-level Stylus mixin library with lots of extra functionality. Be sure
not to miss the normalize() mixin. Axis uses and imports Nib, so Nib has been
removed from this package. This might not require an import statement.

### [Autoprefixer](https://github.com/jenius/autoprefixer-stylus) 0.6.0

An autoprefixer plugin for Stylus. Will also remove unnecessary prefixes if
there is widespread browser support. It is automatic and does not need to be
imported.

## Compatibility

The package should be fully compatible with Meteor 0.9.

All of these packages should be compatible with each other. That said, there are
not many tests at the moment. Feel free to PR any tests you think might be
handy.

NOTE: This may not be compatible with other Meteor Stylus libraries. Please
uninstall anything related to Stylus before running this, otherwise your
application may fail with a fibers-related error.

## Updates

Feel free to contact the author or submit a PR if these get terribly out-of-
date, or if you have any suggestions for other packages to be included.

## Testing

Basic tests for each module are provided. If you don't test in Chrome, you're
gonna have a bad time.

To test, run:

```
meteor test-packages ./
```

[travis-img]: http://img.shields.io/travis/mquandalle/meteor-stylus.svg
[travis-url]: https://travis-ci.org/mquandalle/meteor-stylus)
