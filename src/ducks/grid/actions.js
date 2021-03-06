var types = require('./types');

function clearCell(x, y) {
  return {
    type: types.CLEAR_CELL,
    x:    '' + x,
    y:    '' + y
  };
}

function fillCell(x, y, color) {
  return {
    type:  types.FILL_CELL,
    color: color,
    x:     '' + x,
    y:     '' + y
  };
}

function setY(y) {
  return {
    type: types.SET_Y,
    y:    y
  };
}

module.exports = {
  clearCell: clearCell,
  fillCell:  fillCell,
  setY:      setY
};
