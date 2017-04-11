var Immutable = require('immutable');

var types = require('./types');

var initialState = Immutable.fromJS({
  cells: {}
});

function grid(state, action) {
  if (typeof state == 'undefined') {
    state = initialState;
  }

  switch (action.type) {
  case types.CLEAR_CELL:
    return state.setIn(['cells', action.x, action.y], null);
  case types.FILL_CELL:
    return state.setIn(['cells', action.x, action.y], action.color);
  default:
    return state;
  }
}

module.exports = grid;
