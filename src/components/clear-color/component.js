var deepAssign = require('deep-assign');
var maquette = require('maquette'),
    h        = maquette.h;

var clearColor = {
  renderMaquette: function(props) {
    return h('canvas.clear-color', deepAssign({
      height: 31,
      width:  32
    }, props), [
      '...'
    ]);
  }
};

module.exports = clearColor;
