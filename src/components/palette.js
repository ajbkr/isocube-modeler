var Color = require('color');

function Palette(props) {
  var ctx = props.el.getContext('2d');

  this.ctx = ctx;

  this.props = props;
}

Palette.prototype.render = function() {
  var ctx = this.ctx;

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

  var height = ctx.canvas.height,
      width  = ctx.canvas.width;

  var idx = 0;
  for (var y = 0; y < height; y += height / 4) {
    for (var x = 0; x < width; x += width / 4) {
      ctx.fillStyle = colors[idx++];
      ctx.fillRect(x, y, width / 4, height / 4);
    }
  }

  ctx.fillStyle = '#000';
  for (y = 0; y < height; y += height / 4) {
    ctx.fillRect(0, y, width, 1);
  }
  for (x = 0; x < width; x += width / 4) {
    ctx.fillRect(x, 0, 1, height);
  }

  if (this.props.pickedColor) {
    var index = colors.indexOf(this.props.pickedColor);

    x = index % 4 * 32;
    y = Math.floor(index / 4) * 32;

    ctx.fillStyle = Color(colors[index]).negate();
    ctx.fillRect(x +  1, y +  1, 31,  1);
    ctx.fillRect(x +  1, y +  1,  1, 31);
    ctx.fillRect(x + 31, y +  1,  1, 31);
    ctx.fillRect(x +  1, y + 31, 31,  1);
  }
};

module.exports = Palette;
