var maquette = require('maquette'),
    h        = maquette.h;

var colorPicker = require('../color-picker');
var grid        = require('../grid/index');	// XXX -index
var preview     = require('../preview/index');	// XXX -index

var app = {
  renderMaquette: function(props) {
    return h('div#app', [
      colorPicker.component.renderMaquette(props.colorPicker),
      grid.component.renderMaquette(props.grid),
      preview.component.renderMaquette()
    ]);
  }
};

module.exports = app;
