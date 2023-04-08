import * as THREE from "three";
import { AmbientLight } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export const loadingModel = () => {
  const canvas = document.getElementById("canvas") as any;
  if(!canvas) return false;
  console.log("load model");

  // Scene
  const scene = new THREE.Scene();
  const loader = new GLTFLoader();
  loader.load("/model/portfolio.gltf", (gltf) => {
    console.log("loaded");
    gltf.scene.scale.set(1.2, 1.2, 1.2);
    gltf.scene.position.setY(-0.75);
    scene.add(gltf.scene);
  });

  //   Light
  // const lightAxis = new THREE.AxesHelper(3);
  const light = new AmbientLight(0xffffff, 0.5);
  // light.add(lightAxis);
  // scene.add(lightAxis);
  light.position.set(0, 4, -5);
  scene.add(light);
  const spotLight = new THREE.SpotLight(0xffffff, 10, 3.25, 70);
  spotLight.position.setY(3);
  // spotLight.add(lightAxis);
  scene.add(spotLight);
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  /** GROUND  */
  const ground_geo = new THREE.PlaneBufferGeometry(10, 10, 5, 5);
  const groundMatertial = new THREE.MeshStandardMaterial({
    color: "#20202300",
    side: THREE.DoubleSide,
  });
  const ground = new THREE.Mesh(ground_geo, groundMatertial);
  ground.rotateX(Math.PI / 2);
  ground.translateZ(0.75);
  // scene.add(ground);
  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // Update camera
    camera.aspect = 16 / 9;
    camera.updateProjectionMatrix();
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );

  camera.position.x = 0;
  camera.position.y = 0.75;
  camera.position.z = 1.95;
  scene.add(camera);
  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.enableZoom = true;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // const clock = new THREE.Clock();

  const tick = () => {
    // const elapsedTime = clock.getElapsedTime();

    // Update controls
    controls.update();
    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
  return true;
};
