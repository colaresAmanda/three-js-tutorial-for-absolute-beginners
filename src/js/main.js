import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const orbit = new OrbitControls(camera, renderer.domElement)

const axesHelper = new THREE.AxesHelper(3)

scene.add(axesHelper)

//x, y, z
camera.position.set(0, 2, 5)
orbit.update()

const boxGeometry = new THREE.BoxGeometry()

const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff })

const box = new THREE.Mesh(boxGeometry, boxMaterial)

scene.add(box)

function animate(time) {
  box.rotation.x += time / 100000
  box.rotation.y += time / 100000
  renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)
