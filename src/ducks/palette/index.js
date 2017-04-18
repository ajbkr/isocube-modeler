var reducer = require('./reducers');

var paletteActions   = require('./actions'),
    paletteSelectors = require('./selectors'),
    paletteTypes     = require('./types');

module.exports = {
  paletteActions:   paletteActions,
  paletteSelectors: paletteSelectors,
  paletteTypes:     paletteTypes,
  reducer:          reducer
};
