var Color = require('color');
var THREE = require('three');

function Preview(props) {
  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(75, props.el.width / props.el.height,
   1, 10000);
  camera.position.x = 750;
  camera.position.y = 750;
  camera.position.z = 3150;

  var geometry = new THREE.BoxGeometry(100, 100, 100);

  var renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas: props.el
  });
  
  this.camera   = camera;
  this.geometry = geometry;
  this.renderer = renderer;
  this.scene    = scene;

  this.props = props;
}

Preview.prototype.render = function() {
  var cells = this.props.cells;

  var scene = this.scene;

  while (scene.children.length) {
    scene.remove(scene.children[0]);
  }

  if (cells) {
    for (var z = 0; z < cells.length; ++z) {
      for (var y = 0; y < cells[z].length; ++y) {
        for (var x = 0; x < cells[z][y].length; ++x) {
          var color = cells[z][y][x];

          if (color) {
            var material = new THREE.MeshBasicMaterial({
              color: Color(color).rgbNumber()
            });
            var cube = new THREE.Mesh(this.geometry, material);
            cube.position.set(x * 100, y * 100, z * 100);
            scene.add(cube);
          }
        }
      }
    }
  }

  this.renderer.render(scene, this.camera);
};

module.exports = Preview;
