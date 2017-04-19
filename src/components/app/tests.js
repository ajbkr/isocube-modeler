var chai   = require('chai'),
    expect = chai.expect;
var createTestProjector = require('maquette-query').createTestProjector;

var app             = require('./index'),
    createComponent = app.createComponent;

describe('app', function() {
  describe('component', function() {
    var projector = createTestProjector();
    var appComponent;
    var divApp = projector.query('div#app');

    beforeEach(function() {
      appComponent = createComponent();
      projector.initialize(appComponent.renderMaquette);
    });

    it('renders a div element', function() {
      expect(divApp).to.exist;
    });
  });
});
