var maquette = require('maquette'),
    h        = maquette.h;

var grid = {
  renderMaquette: function() {
    return h('article', [
      h('h4', [
        'Grid (x-z Plane)'
      ]),
      h('canvas#grid', {
        height: 256,
        width:  256
      }, [
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
