var chai   = require('chai'),
    expect = chai.expect;
var createTestProjector = require('maquette-query').createTestProjector;
var sinon = require('sinon');

var clearColor      = require('./index'),
    createComponent = clearColor.createComponent;

describe('clearColor', function() {
  describe('component', function() {
    var projector = createTestProjector();
    var clearColorComponent;
    var canvasClearColor = projector.query('canvas.clear-color');
    var click = sinon.stub();

    beforeEach(function() {
      clearColorComponent = createComponent({
        onclick: click
      });
      projector.initialize(clearColorComponent.renderMaquette);
    });

    it('renders a canvas element', function() {
      expect(canvasClearColor.textContent).to.equal('...');
    });

    it('calls the handler when clicked', function() {
      canvasClearColor.simulate.click();
      expect(click.calledOnce).to.be.true;
    });
  });
});
