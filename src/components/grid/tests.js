var chai   = require('chai'),
    expect = chai.expect;
var createTestProjector = require('maquette-query').createTestProjector;

var grid            = require('./index'),
    createComponent = grid.createComponent;

describe('grid', function() {
  describe('component', function() {
    var projector = createTestProjector();
    var gridComponent;
    var article = projector.query('article');
    var h4          = projector.query('h4'),
        canvasGrid  = projector.query('canvas#grid'),
        spanYLabel  = projector.query('span.y-label'),
        inputRangeY = projector.query('input.range-y'),
        spanYValue  = projector.query('span.y-value');

    beforeEach(function() {
      gridComponent = createComponent({
        canvasGrid: {
          onclick: function() {}
        }
      });
      projector.initialize(gridComponent.renderMaquette);
    });

    it('renders an article element', function() {
      expect(article).to.exist;
    });

    it('renders h4, canvas, input, and span elements', function() {
      expect(h4.textContent).to.equal('Grid (x-z Plane)');
      expect(canvasGrid.textContent).to.equal('...');
      expect(spanYLabel.textContent).to.equal('y:');
      expect(inputRangeY).to.exist;
      expect(spanYValue).to.exist;
    });
  });
});
