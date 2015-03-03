var setDomElement = function (domStr, testFunc) {
  var div = document.createElement('div');
  div.innerHTML = domStr;
  div.style.display = 'block';
  document.body.appendChild(div);
  var p = div.firstChild;
  testFunc.call(p);
  document.body.removeChild(div);
};

var setStylusClass = function (className, testFunc) {
  return setDomElement('<p class="stylus-' + className + '"></p>', testFunc);
};

Tinytest.add("stylus - presence", function(test) {
  setStylusClass('dashy-left-border', function () {
    var leftBorder = getStyleProperty(this, 'border-left-style');
    test.equal(leftBorder, "dashed");
  });
});

Tinytest.add("stylus - relative @import", function(test) {
  setStylusClass('relative-import-dashy-border', function () {
    test.equal(getStyleProperty(this, 'border-left-style'), "dashed");
  });

  setStylusClass('overwrite-size', function () {
    test.equal(getStyleProperty(this, 'font-size'), "20px");
  });
});

Tinytest.add("stylus - absolute @import", function(test) {
  setStylusClass('absolute-import-dashy-border', function () {
    test.equal(getStyleProperty(this, 'border-left-style'), "dashed");
  });
});

Tinytest.add("stylus - nib", function(test) {
  setStylusClass('nib-overflow-ellipsis', function () {
    test.equal(getStyleProperty(this, 'overflow'), "hidden");
    test.equal(getStyleProperty(this, 'text-overflow'), "ellipsis");
  });
});

Tinytest.add("stylus - jeet", function(test) {
  setStylusClass('jeet-center', function () {
    test.equal(getStyleProperty(this, 'max-width'), "1337px");
  });
});

Tinytest.add("stylus - rupture", function(test) {
  setStylusClass('rupture-aboveOneIsBlack', function () {
    test.equal(getStyleProperty(this, 'color'), "rgb(0, 0, 0)");
  });
});

Tinytest.add("stylus - axis", function(test) {
  setStylusClass('axis-pre', function () {
    test.equal(getStyleProperty(this, 'white-space'), "pre-wrap");
  });
});

Tinytest.add("stylus - typographic", function(test) {
  setDomElement('<h1 class="stylus-typographic-h1"></h1>', function () {
    // Different browser agents format the `font-family` string in different
    // ways -- for instance Chrome uses single quote ' whereas Firefox uses
    // double quotes " to wrapped multi-words font names. To handle all the case
    // we interpret the given string as a list of font independently of the
    // browser specifics formatting.
    var fontString = getStyleProperty(this, 'font-family');
    var fontList = fontString.replace(/['"]/g, '').split(/, ?/);
    var expected = ['Garamond', 'Baskerville', 'Baskerville Old Face',
                    'Hoefler Text', 'Times New Roman', 'serif'];
    test.equal(fontList, expected);
  })
});

// XXX This test only passes on Chrome! It should work on other browsers as
// well!
Tinytest.add("stylus - autoprefixer", function(test) {
  setStylusClass('autoprefixer-columns', function () {
    test.equal(getStyleProperty(this, '-webkit-column-count'), "2");
  });
});
