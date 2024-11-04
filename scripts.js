// Three.js Scene Setup for a rotating cube

// Select the div to render the 3D scene
const threeJsCanvas = document.getElementById('three-js-canvas');

// Create the Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, threeJsCanvas.clientWidth / threeJsCanvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(threeJsCanvas.clientWidth, threeJsCanvas.clientHeight);
threeJsCanvas.appendChild(renderer.domElement);

// Add a rotating cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x007bff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position the camera
camera.position.z = 3;

// Animation function to rotate the cube
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();