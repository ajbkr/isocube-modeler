var Immutable = require('immutable');

var types = require('./types');

var initialState = Immutable.fromJS({
  color: 'white'
});

function palette(state, action) {
  if (typeof state == 'undefined') {
    state = initialState;
  }

  switch (action.type) {
  case types.PICK_COLOR:
    return state.set('color', action.color);
  default:
    return state;
  }
}

module.exports = palette;
