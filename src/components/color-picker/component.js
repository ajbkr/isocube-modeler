var maquette = require('maquette'),
    h        = maquette.h;

var clearColor = require('../clear-color/index');	// XXX -index
var palette    = require('../palette/index');		// XXX -index

var colorPicker = {
  renderMaquette: function(props) {
    return h('nav', [
      h('div#color-picker', [
        h('h4', [
          'Palette'
        ]),
        palette.component.renderMaquette(props.canvasPalette),
        clearColor.component.renderMaquette(props.clearColor)
      ])
    ]);
  }
};

module.exports = colorPicker;
