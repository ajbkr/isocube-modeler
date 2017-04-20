var deepAssign = require('deep-assign');
var maquette = require('maquette'),
    h        = maquette.h;

var palette = {
  renderMaquette: function(props) {
    return h('canvas.palette', deepAssign({
      height: 128,
      width:  128
    }, props), [
      '...'
    ]);
  }
};

module.exports = palette;
