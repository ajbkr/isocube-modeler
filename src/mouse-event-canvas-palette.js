var offset = require('mouse-event-offset');

var paletteActions   = require('./ducks/palette').paletteActions;

module.exports = function(store) {
  return function(event) {
    var position = offset(event);

    var x = position[0],
        y = position[1];

    var clampedX = (x >= event.target.width)  ? (event.target.width  - 1) : (x),
        clampedY = (y >= event.target.height) ? (event.target.height - 1) : (y);

    var normalizedX = Math.floor(clampedX / 32),
        normalizedY = Math.floor(clampedY / 32);

    var index = normalizedY * 4 + normalizedX;
    store.dispatch(paletteActions.pickColor(index));
  };
};
