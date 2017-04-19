var component = require('./component');

var createComponent = function(props) {
  return {
    renderMaquette: function() {
      return component.renderMaquette(props);
    }
  };
};

module.exports = createComponent;
