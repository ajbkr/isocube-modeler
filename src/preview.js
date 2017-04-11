var THREE = require('three');

function Preview(el) {
  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(75, el.width / el.height, 1, 10000);
  camera.position.z = 1000;

  var geometry = new THREE.BoxGeometry(200, 200, 200);
  var material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
  });

  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  var renderer = new THREE.WebGLRenderer({ canvas: el });
  
  this.camera = camera;
  this.geometry = geometry;
  this.mesh = mesh;
  this.renderer = renderer;
  this.scene = scene;
}

Preview.prototype.render = function() {
  this.renderer.render(this.scene, this.camera);
};

module.exports = Preview;
