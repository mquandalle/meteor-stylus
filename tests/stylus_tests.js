var setDomElement = function (domStr, testFunc) {
  var div = document.createElement('div');
  div.innerHTML = domStr;
  div.style.display = 'block';
  document.body.appendChild(div);
  var p = div.firstChild;
  testFunc.call(p);
  document.body.removeChild(div);
};

Tinytest.add("stylus - presence", function(test) {
  setDomElement('<p class="stylus-dashy-left-border"></p>', function () {
    var leftBorder = getStyleProperty(this, 'border-left-style');
    test.equal(leftBorder, "dashed");
  });
});

Tinytest.add("stylus - @import", function(test) {
  setDomElement('<p class="stylus-import-dashy-border stylus-overwrite-color"></p>', function () {
    test.equal(getStyleProperty(this, 'font-size'), "20px");
    test.equal(getStyleProperty(this, 'border-left-style'), "dashed");
  });
});

Tinytest.add("stylus - nib", function(test) {
  setDomElement('<p class="stylus-nib-overflow-ellipsis"></p>', function () {
    test.equal(getStyleProperty(this, 'overflow'), "hidden");
    test.equal(getStyleProperty(this, 'text-overflow'), "ellipsis");
  });
});

Tinytest.add("stylus - jeet", function(test) {
  setDomElement('<p class="stylus-jeet-center"></p>', function () {
    test.equal(getStyleProperty(this, 'max-width'), "1337px");
  });
});
