function RangeY(props) {
  props.el.addEventListener('change', props.change);

  this.props = props;
}

module.exports = RangeY;
