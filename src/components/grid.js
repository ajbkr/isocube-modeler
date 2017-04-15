function Grid(props) {
  var ctx = props.el.getContext('2d');

  props.el.addEventListener('mousedown', props.click);
  props.el.addEventListener('mousemove', props.click);

  this.ctx = ctx;

  this.props = props;
}

Grid.prototype.render = function() {
  var ctx = this.ctx;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = '#000';
  for (var y = 0; y < ctx.canvas.height; y += ctx.canvas.height / 16) {
    if (y === ctx.canvas.height / 16) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    }

    ctx.fillRect(0, y, ctx.canvas.width, 1);
  }
  ctx.fillStyle = '#000';
  for (var x = 0; x < ctx.canvas.width; x += ctx.canvas.width / 16) {
    if (x === ctx.canvas.width / 16) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    }

    ctx.fillRect(x, 0, 1, ctx.canvas.height);
  }

  if (this.props.cells) {
    for (var z = 0; z < this.props.cells.length; ++z) {
      for (x = 0; x < this.props.cells[z].length; ++x) {
        var color = this.props.cells[z][this.props.y][x];

        if (color) {
          ctx.fillStyle = color;
          ctx.fillRect(x * 16 + 1, z * 16 + 1, 15, 15);
        }
      }
    }
  }
};

module.exports = Grid;
