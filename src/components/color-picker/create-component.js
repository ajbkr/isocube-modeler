var component = require('./component');

var createComponent = function() {
  return {
    renderMaquette: component.renderMaquette
  };
};

module.exports = createComponent;
