var offset = require('mouse-event-offset');

var gridActions = require('./ducks/grid').gridActions;
var paletteSelectors = require('./ducks/palette').paletteSelectors;

module.exports = function(store) {
  return function(event) {
    if ( !(event.buttons & 0x01)) {
      return;
    }

    var position = offset(event);

    var x = position[0],
        y = position[1];

    var clampedX = (x >= event.target.width)  ? (event.target.width  - 1) : (x),
        clampedY = (y >= event.target.height) ? (event.target.height - 1) : (y);

    var normalizedX = Math.floor(clampedX / 16),
        normalizedY = Math.floor(clampedY / 16);

    store.dispatch(gridActions.fillCell(normalizedX, normalizedY,
     paletteSelectors.pickedColor(store.getState().palette)));
  };
};
