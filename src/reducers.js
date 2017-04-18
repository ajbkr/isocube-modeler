var redux = require('redux');

var grid    = require('./ducks/grid').reducer,
    palette = require('./ducks/palette').reducer,
    preview = require('./ducks/preview').reducer;

module.exports = redux.combineReducers({
  grid:    grid,
  palette: palette,
  preview: preview
});
