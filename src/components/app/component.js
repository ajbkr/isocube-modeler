var maquette = require('maquette'),
    h        = maquette.h;

var colorPicker = require('../color-picker');
var grid        = require('../grid/index');	// XXX -index
var preview     = require('../preview/index');	// XXX -index

var app = {
  renderMaquette: function() {
    return h('div#app', [
      colorPicker.component.renderMaquette(),
      grid.component.renderMaquette(),
      preview.component.renderMaquette()
    ]);
  }
};

module.exports = app;
