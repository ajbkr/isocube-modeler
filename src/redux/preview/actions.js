var types = require('./types');

function setProjection(projection) {
  return {
    type:       types.SET_PROJECTION,
    projection: projection
  };
}

module.exports = {
  setProjection: setProjection
};
