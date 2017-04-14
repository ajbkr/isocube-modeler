var Immutable = require('immutable');

var types = require('./types');

var initialState = Immutable.fromJS({
  cells: {},
  y:     0
});

function grid(state, action) {
  var z;

  if (typeof state == 'undefined') {
    state = initialState;
  }

  switch (action.type) {
  case types.CLEAR_CELL:
    z = action.y;

    return state.setIn(['cells', action.x, '' + state.get('y'), z], null);
  case types.FILL_CELL:
    z = action.y;

    return state.setIn(['cells', action.x, '' + state.get('y'), z],
     action.color);
  case types.SET_Y:
    return state.set('y', action.y);
  default:
    return state;
  }
}

module.exports = grid;
