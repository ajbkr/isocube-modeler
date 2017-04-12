var isEqual = require('is-equal');
var redux = require('redux');
var watch = require('redux-watch');

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

  // Grid //////////////////////////////////////////////////////////////////////
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
    },
    el: document.getElementById('grid')
  });
  grid.render();

  var cellsWatcher = watch(function() {
    return gridSelectors.cells(store.getState().grid);
  }, isEqual);
  store.subscribe(cellsWatcher(function(newVal) {
    grid.props.cells = newVal;
    grid.render();
  }));

  // Palette ///////////////////////////////////////////////////////////////////
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
    },
    el: document.getElementsByClassName('palette')[0]
  });
  palette.props.pickedColor = paletteSelectors.pickedColor(
   store.getState().palette);
  palette.render();

  var pickedColorWatcher = watch(function() {
    return paletteSelectors.pickedColor(store.getState().palette);
  });
  store.subscribe(pickedColorWatcher(function(newVal) {
    palette.props.pickedColor = newVal;
    palette.render();
  }));

  // Preview ///////////////////////////////////////////////////////////////////
  var preview = new Preview(document.getElementById('preview'));
  preview.render();
})();
