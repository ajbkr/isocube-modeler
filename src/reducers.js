var redux = require('redux');

var grid    = require('./redux/grid').reducer,
    palette = require('./redux/palette').reducer,
    preview = require('./redux/preview').reducer;

module.exports = redux.combineReducers({
  grid:    grid,
  palette: palette,
  preview: preview
});
