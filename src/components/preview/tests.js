var chai   = require('chai'),
    expect = chai.expect;
var createTestProjector = require('maquette-query').createTestProjector;

var preview         = require('./index'),
    createComponent = preview.createComponent;

describe('preview', function() {
  describe('component', function() {
    var projector = createTestProjector();
    var previewComponent;
    var aside = projector.query('aside');
    var h4                = projector.query('h4'),
        canvasPreview     = projector.query('canvas#preview'),
        span              = projector.query('span'),
        inputPerspective  = projector.query('input.perspective'),
        inputOrthographic = projector.query('input.orthographic');

    beforeEach(function() {
      previewComponent = createComponent();
      projector.initialize(previewComponent.renderMaquette);
    });

    it('renders an aside element', function() {
      expect(aside).to.exist;
    });

    it('renders h4, canvas, span, and input elements', function() {
      expect(h4.textContent).to.equal('Preview');
      expect(canvasPreview.textContent).to.equal('...');
      expect(span.textContent).to.equal('Projection:');
      expect(inputPerspective.properties.checked).to.equal('checked');
      expect(inputOrthographic.properties.checked).to.not.exist;
    });
  });
});
