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
    ctx.fillRect(0, y, ctx.canvas.width, 1);
  }
  for (var x = 0; x < ctx.canvas.width; x += ctx.canvas.width / 16) {
    ctx.fillRect(x, 0, 1, ctx.canvas.height);
  }

  if (this.props.cells) {
    for (y = 0; y < this.props.cells.length; ++y) {
      for (x = 0; x < this.props.cells[y].length; ++x) {
        var color = this.props.cells[y][x];

        if (color) {
          ctx.fillStyle = color;
          ctx.fillRect(x * 16 + 1, y * 16 + 1, 15, 15);
        }
      }
    }
  }
};

module.exports = Grid;
