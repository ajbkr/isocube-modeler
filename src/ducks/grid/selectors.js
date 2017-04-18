function cells(grid) {
  var v = [];

  for (var z = 0; z < 16; ++z) {
    v[z] = [];

    for (var y = 0; y < 16; ++y) {
      v[z][y] = [];

      for (var x = 0; x < 16; ++x) {
        v[z][y][x] = grid.getIn(['cells', '' + x, '' + y, '' + z]);
      }
    }
  }

  return v;
}

function cellsY(grid) {
  var v = [];

  for (var z = 0; z < 16; ++z) {
    v[z] = [];

    for (var y = 0; y < 16; ++y) {
      v[z][y] = [];
    }

    for (var x = 0; x < 16; ++x) {
      v[z][grid.get('y')][x] = grid.getIn(['cells', '' + x, '' + grid.get('y'),
       '' + z]);
    }
  }

  return v;
}

function filledCell(grid, x, z) {
  return grid.getIn(['cells', '' + x, '' + grid.get('y'), '' + z]);
}

function y(grid) {
  return grid.get('y');
}

module.exports = {
  cells:      cells,
  cellsY:     cellsY,
  filledCell: filledCell,
  y:          y
};
