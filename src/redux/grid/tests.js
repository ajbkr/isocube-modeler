var chai   = require('chai'),
    expect = chai.expect;
var Immutable = require('immutable'),
    Map       = Immutable.Map;
var redux       = require('redux'),
    createStore = redux.createStore;

var actions   = require('./actions'),
    reducer   = require('./reducers'),
    selectors = require('./selectors');

describe('grid', function() {
  describe('reducer', function() {
    describe('clearCell', function() {
      it('should clear the grid cell at (7, 42)', function() {
        var x = 7, y = 42;

        var store = createStore(reducer);

        store.dispatch(actions.clearCell(x, y));
        var nextState = store.getState();

        expect(nextState.getIn(['cells', '' + x, '' + y])).to.be.null;
      });
    });

    describe('fillCell', function() {
      it('should fill the grid cell at (7, 42) with red', function() {
        var color = 'red';
        var x = 7, y = 42;

        var store = createStore(reducer);

        store.dispatch(actions.fillCell(x, y, color));
        var nextState = store.getState();

        expect(nextState.getIn(['cells', '' + x, '' + y])).to.equal(color);
      });
    });
  });

  describe('selectors', function() {
    describe('cells', function() {
      it('should return a multidimensional array with red at (3, 7) and ' +
       'green at (14, 15)', function() {
         var coords = [{
           x: 3,
           y: 7
         }, {
           x: 14,
           y: 15
         }];

        var store = createStore(reducer, {
          grid: Map({
            cells: Map({
              '3': Map({
                '7': 'red'
              }),
              '14': Map({
                '15': 'green'
              })
            })
          })
        });

        var cells = selectors.cells(store.getState().grid);

        expect(cells[coords[0].y][coords[0].x]).to.equal('red');
        expect(cells[coords[1].y][coords[1].x]).to.equal('green');
      });
    });

    describe('filledCell', function() {
      it('should return tan for the grid cell at (7, 42)', function() {
        var color = 'tan';
        var x = 7, y = 42;

        var store = createStore(reducer, {
          grid: Map({
            cells: Map({
              '7': Map({
                '42': color
              })
            })
          })
        });

        expect(selectors.filledCell(store.getState().grid, x, y)).to.equal(
         color);
      });
    });
  });
});
