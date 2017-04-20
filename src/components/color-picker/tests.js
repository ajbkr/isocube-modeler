var chai   = require('chai'),
    expect = chai.expect;
var createTestProjector = require('maquette-query').createTestProjector;

var colorPicker     = require('./index'),
    createComponent = colorPicker.createComponent;

describe('colorPicker', function() {
  describe('component', function() {
    var projector = createTestProjector();
    var colorPickerComponent;
    var nav = projector.query('nav');
    var divColorPicker = projector.query('div#color-picker');
    var h4               = projector.query('h4'),
        canvasPalette    = projector.query('canvas.palette'),
        canvasClearColor = projector.query('canvas.clear-color');

    beforeEach(function() {
      colorPickerComponent = createComponent({
        canvasPalette: {
          onclick: function() {}
        },
        clearColor: {
          onclick: function() {}
        }
      });
      projector.initialize(colorPickerComponent.renderMaquette);
    });

    it('renders a nav element', function() {
      expect(nav).to.exist;
    });

    it('renders a div element with an id attribute of color-picker',
     function() {
      expect(divColorPicker).to.exist;
    });

    it('renders an h4 and two canvas elements', function() {
      expect(h4.textContent).to.equal('Palette');
      expect(canvasPalette.textContent).to.equal('...');
      expect(canvasClearColor.textContent).to.equal('...');
    });
  });
});
