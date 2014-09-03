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
