function cells(grid) {
  var v = [];

  for (var y = 0; y < 16; ++y) {
    v[y] = [];

    for (var x = 0; x < 16; ++x) {
      v[y][x] = grid.getIn(['cells', '' + x, '' + y]);
    }
  }

  return v;
}

function filledCell(grid, x, y) {
  return grid.getIn(['cells', '' + x, '' + y]);
}

module.exports = {
  cells:      cells,
  filledCell: filledCell
};
