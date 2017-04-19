var maquette = require('maquette'),
    h        = maquette.h;

var colorPicker = {
  renderMaquette: function() {
    return h('nav', [
      h('div#color-picker', [
        h('h4', [
          'Palette'
        ]),
        h('canvas.palette', {
          height: 128,
          width:  128
        }, [
          '...'
        ]),
        h('canvas.clear-color', {
          height: 31,
          width:  32
        }, [
          '...'
        ])
      ])
    ]);
  }
};

module.exports = colorPicker;
