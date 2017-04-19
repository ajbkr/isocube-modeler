var deepAssign = require('deep-assign');
var maquette = require('maquette'),
    h        = maquette.h;

var grid = {
  renderMaquette: function(props) {
    return h('article', [
      h('h4', [
        'Grid (x-z Plane)'
      ]),
      h('canvas#grid', deepAssign({
        height: 256,
        width:  256
      }, props.canvasGrid), [
        '...'
      ]),
      h('span.y-label', [
        'y:'
      ]),
      h('input.range-y', {
        type: 'range',
        max:   15,
        min:   0,
        value: 0
      }),
      h('span.y-value')
    ]);
  }
};

module.exports = grid;
