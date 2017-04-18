var reducer = require('./reducers');

var previewActions   = require('./actions'),
    previewSelectors = require('./selectors'),
    previewTypes     = require('./types');

module.exports = {
  previewActions:   previewActions,
  previewSelectors: previewSelectors,
  previewTypes:     previewTypes,
  reducer:          reducer
};
