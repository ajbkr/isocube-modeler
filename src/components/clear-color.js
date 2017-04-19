function ClearColor(props) {
  var ctx = props.el.getContext('2d');

  this.ctx = ctx;

  this.props = props;
}

ClearColor.prototype.render = function() {
  var ctx = this.ctx;

  var height = ctx.canvas.height,
      width  = ctx.canvas.width;

  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 1, height);

  if (this.props.pickedColor === null) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(1, 0, width - 1, 1);
    ctx.fillRect(1, 1, 1, height - 1);
    ctx.fillRect(width - 1, 1, 1, height - 1);
    ctx.fillRect(1, height - 1, width - 1, 1);
  }
};

module.exports = ClearColor;
