var chai   = require('chai'),
    expect = chai.expect;
var Immutable = require('immutable'),
    Map       = Immutable.Map;
var redux       = require('redux'),
    createStore = redux.createStore;

var actions   = require('./actions'),
    reducer   = require('./reducers'),
    selectors = require('./selectors');

describe('preview', function() {
  describe('reducer', function() {
    describe('setProjection', function() {
      it('should set projection to orthographic', function() {
        var projection = 'orthographic';

        var store = createStore(reducer);

        store.dispatch(actions.setProjection(projection));
        var nextState = store.getState();

        expect(nextState.get('projection')).to.equal(projection);
      });
    });
  });

  describe('selectors', function() {
    describe('projection', function() {
      it('should return orthographic', function() {
        var projection = 'orthographic';

        var store = createStore(reducer, {
          preview: Map({
            projection: projection
          })
        });

        var actual = selectors.projection(store.getState().preview);

        expect(actual).to.equal(projection);
      });
    });
  });
});
