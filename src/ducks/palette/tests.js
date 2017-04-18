var chai   = require('chai'),
    expect = chai.expect;
var Immutable = require('immutable'),
    Map       = Immutable.Map;
var redux       = require('redux'),
    createStore = redux.createStore;

var actions   = require('./actions'),
    reducer   = require('./reducers'),
    selectors = require('./selectors');

describe('palette', function() {
  describe('reducer', function() {
    describe('pickColor', function() {
      it('should pick the color red', function() {
        var index = 3;

        var store = createStore(reducer);

        store.dispatch(actions.pickColor(index));
        var nextState = store.getState();

        expect(nextState.get('color')).to.equal('red');
      });

      it('should pick the clear color (null)', function() {
        var index = null;

        var store = createStore(reducer);

        store.dispatch(actions.pickColor(index));
        var nextState = store.getState();

        expect(nextState.get('color')).to.equal(null);
      });
    });
  });

  describe('selectors', function() {
    describe('pickedColor', function() {
      it('should return the color green', function() {
        var color = 'green';

        var store = createStore(reducer, {
          palette: Map({
            color: color
          })
        });

        expect(selectors.pickedColor(store.getState().palette)).to.equal(color);
      });
    });
  });
});
