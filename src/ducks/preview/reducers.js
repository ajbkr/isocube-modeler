var Immutable = require('immutable');

var types = require('./types');

var initialState = Immutable.fromJS({
  projection: 'perspective'
});

function preview(state, action) {
  if (typeof state == 'undefined') {
    state = initialState;
  }

  switch (action.type) {
  case types.SET_PROJECTION:
    return state.set('projection', action.projection);

  default:
    return state;
  }
}

module.exports = preview;
