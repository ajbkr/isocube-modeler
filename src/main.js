var redux = require('redux');

var reducers = require('./reducers');

var store = redux.createStore(reducers);

var grid          = require('./redux/grid'),
    gridActions   = grid.gridActions,
    gridSelectors = grid.gridSelectors;

var palette          = require('./redux/palette'),
    paletteActions   = palette.paletteActions,
    paletteSelectors = palette.paletteSelectors;

(function() { 'use strict';
  var Grid    = require('./grid');
  var Palette = require('./palette');
  var Preview = require('./preview');

  var grid = new Grid({
    click: function(event) {
      var x = event.clientX - event.target.offsetLeft,
          y = event.clientY - event.target.offsetTop;

      var clampedX = (x >= event.target.width)  ? (event.target.width  - 1) :
           (x),
          clampedY = (y >= event.target.height) ? (event.target.height - 1) :
           (y);

      var normalizedX = Math.floor(clampedX / 16),
          normalizedY = Math.floor(clampedY / 16);

      store.dispatch(gridActions.fillCell(normalizedX, normalizedY,
       paletteSelectors.pickedColor(store.getState().palette)));

      grid.props.cells = gridSelectors.cells(store.getState().grid);
      grid.render();
    },
    el: document.getElementById('grid')
  });
  grid.render();

  var palette = new Palette({
    click: function(event) {
      var x = event.clientX - event.target.offsetLeft,
          y = event.clientY - event.target.offsetTop;

      var clampedX = (x >= event.target.width)  ? (event.target.width  - 1) :
           (x),
          clampedY = (y >= event.target.height) ? (event.target.height - 1) :
           (y);

      var normalizedX = Math.floor(clampedX / 32),
          normalizedY = Math.floor(clampedY / 32);

      var index = normalizedY * 4 + normalizedX;
      store.dispatch(paletteActions.pickColor(index));

      palette.props.pickedColor = paletteSelectors.pickedColor(
       store.getState().palette);
      palette.render();
    },
    el: document.getElementsByClassName('palette')[0]
  });
  palette.props.pickedColor = paletteSelectors.pickedColor(
   store.getState().palette);
  palette.render();

  var preview = new Preview(document.getElementById('preview'));
  preview.render();
})();
