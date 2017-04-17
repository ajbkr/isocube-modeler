var Color = require('color');
var THREE = require('three');

function Preview(props) {
  var scene = new THREE.Scene();

  var orthographicCamera = new THREE.OrthographicCamera(-1600 * 2,
    1600 * 2, 1200 * 2, -1200 * 2, 1, 10000);
  orthographicCamera.position.x = -3150;
  orthographicCamera.position.y = 3150;
  orthographicCamera.position.z = -3150;

  var perspectiveCamera = new THREE.PerspectiveCamera(75,
   props.el.width / props.el.height, 1, 10000);
  perspectiveCamera.position.x = -3150;
  perspectiveCamera.position.y = 3150;
  perspectiveCamera.position.z = -3150;

  var geometry = new THREE.BoxGeometry(100, 100, 100);

  var renderer = new THREE.WebGLRenderer({
    alpha:  true,
    canvas: props.el
  });
  
  this.cameras  = {
    orthographic: orthographicCamera,
    perspective:  perspectiveCamera
  };
  this.geometry = geometry;
  this.renderer = renderer;
  this.scene    = scene;

  this.props = props;

  if (typeof this.props.projection == 'undefined') {
    this.props.projection = 'perspective';
  }
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
            var material = new THREE.MeshLambertMaterial({
              color: Color(color).rgbNumber()
            });
            var cube = new THREE.Mesh(this.geometry, material);
            cube.position.set(800 - x * 100, y * 100, 800 - z * 100);
            scene.add(cube);
          }
        }
      }
    }
  }

  var directionalLight = new THREE.DirectionalLight(0x00ffffff, 1.5);
  directionalLight.position.set(-2000, 2500, 3000);
  directionalLight.target.position.set(800, 0, 800);
  scene.add(directionalLight);

  var camera = this.cameras[this.props.projection];
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  this.renderer.render(scene, camera);
};

module.exports = Preview;
