var types = require('./types');

function pickColor(index) {
  var colors = [
    'white',
    'yellow',
    'orange',
    'red',
    'magenta',
    'purple',
    'cyan',
    'blue',
    'green',
    'darkgreen',
    'tan',
    'brown',
    'lightgrey',
    'darkgrey',
    'grey',
    'black'
  ];

  return {
    type:  types.PICK_COLOR,
    color: colors[index] || null
  };
}

module.exports = {
  pickColor: pickColor
};
