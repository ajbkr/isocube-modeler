var chai   = require('chai'),
    expect = chai.expect;
var createTestProjector = require('maquette-query').createTestProjector;
var sinon = require('sinon');

var palette         = require('./index'),
    createComponent = palette.createComponent;

describe('palette', function() {
  describe('component', function() {
    var projector = createTestProjector();
    var paletteComponent;
    var canvasPalette = projector.query('canvas.palette');
    var click = sinon.stub();

    beforeEach(function() {
      paletteComponent = createComponent({
        onclick: click
      });
      projector.initialize(paletteComponent.renderMaquette);
    });

    it('renders a canvas element', function() {
      expect(canvasPalette.textContent).to.equal('...');
    });

    it('calls the handler when clicked', function() {
      canvasPalette.simulate.click();
      expect(click.calledOnce).to.be.true;
    });
  });
});
