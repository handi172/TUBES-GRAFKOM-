var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
//skybox
let skyBoxLoader = new THREE.CubeTextureLoader();
let skybox = skyBoxLoader.load(["img/px.png", "img/nx.png", "img/py.png", "img/ny.png", "img/pz.png", "img/nz.png"]);
scene.background = skybox;

//audio
let pendengar = new THREE.AudioListener();
cam.add(pendengar);

let sound1 = new THREE.Audio(pendengar);
let soundLoader = new THREE.AudioLoader().load("audio/bgmusic.ogg", (hasil) => {
  sound1.setBuffer(hasil);
});
// addEventListener("click", function () {
//   sound1.play();
// });

//jgn lupa rubah
cam.position.set(47.5, 3.5, 47.5);

scene.fog = new THREE.Fog(0x858b91, 1, 30);

renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener("resize", function () {
  renderer.setSize(this.innerWidth, this.innerHeight);
  cam.aspect = this.innerWidth / this.innerHeight;
  cam.updateProjectionMatrix();
});

//floor
const floorTexture = new THREE.TextureLoader().load("./img/floor.jpg");
const planeGeo = new THREE.PlaneGeometry(100, 100);
const planeMat = new THREE.MeshBasicMaterial({ map: floorTexture });
const planemesh = new THREE.Mesh(planeGeo, planeMat);
planemesh.rotation.x -= Math.PI / 2;
planemesh.position.y = -1.5;
scene.add(planemesh);
//wall texture
const wallTexture = new THREE.TextureLoader().load("./img/wall.jpg");
//wall material
const planeMatWall = new THREE.MeshBasicMaterial({
  map: wallTexture,
  side: THREE.DoubleSide,
});

//wall Outside
const planeWall1 = new THREE.Mesh(new THREE.PlaneGeometry(100, 10), planeMatWall);
planeWall1.position.set(0, 3.5, -50);
scene.add(planeWall1);

const planeWall2 = new THREE.Mesh(new THREE.PlaneGeometry(100, 10), planeMatWall);
planeWall2.position.set(0, 3.5, 50);
scene.add(planeWall2);

const planeWall3 = new THREE.Mesh(new THREE.PlaneGeometry(100, 10), planeMatWall);
planeWall3.position.set(50, 3.5, 0);
planeWall3.rotation.y = Math.PI / 2;
scene.add(planeWall3);

const planeWall4 = new THREE.Mesh(new THREE.PlaneGeometry(100, 10), planeMatWall);
planeWall4.position.set(-50, 3.5, 0);
planeWall4.rotation.y = Math.PI / 2;
scene.add(planeWall4);

//wall
const boxGeo = new THREE.BoxGeometry(15, 10, 1);
const boxGeoKeciil = new THREE.BoxGeometry(7.5, 10, 1);
const boxMat = new THREE.MeshBasicMaterial({
  map: wallTexture,
});
//wall1
const wall1 = new THREE.Mesh(boxGeo, boxMat);
wall1.position.set(42.5, 3.5, 25);
wall1.name = "wall1";
scene.add(wall1);

//wall 2
const wall2 = new THREE.Mesh(boxGeo, boxMat);
wall2.position.set(40, 3.5, 42.5);
wall2.rotation.y = Math.PI / 2;
wall2.name = "wall2";
scene.add(wall2);
//wall 3
const wall3 = new THREE.Mesh(boxGeo, boxMat);
wall3.position.set(35, 3.5, 32);
wall3.rotation.y = Math.PI / 2;
wall3.name = "wall3";
scene.add(wall3);
//wall panjang
const boxGeoPanjang = new THREE.BoxGeometry(30, 10, 1);
//wall panjang 2
const boxGeoPanjang2 = new THREE.BoxGeometry(50, 10, 1);
//wall 4
const wall4 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall4.position.set(20.5, 3.5, 40);
wall4.name = "wall4";
scene.add(wall4);
//wall 5
const wall5 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall5.position.set(-5, 3.5, 35);
wall5.rotation.y = Math.PI / 2;
wall5.name = "wall5";
scene.add(wall5);
//wall 6
const wall6 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall6.position.set(9.5, 3.5, 31);
wall6.name = "wall6";
scene.add(wall6);
//wall 7
const wall7 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall7.position.set(9.5, 3.5, 20);
wall7.name = "wall7";
scene.add(wall7);
//wall 8
const wall8 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall8.position.set(25, 3.5, 5.5);
wall8.rotation.y = Math.PI / 2;
wall8.name = "wall8";
scene.add(wall8);
//wall 9
const wall9 = new THREE.Mesh(boxGeo, boxMat);
wall9.position.set(42.5, 3.5, 15);
wall9.name = "wall9";
scene.add(wall9);
//wall 10
const wall10 = new THREE.Mesh(boxGeo, boxMat);
wall10.position.set(32.5, 3.5, 5);
wall10.name = "wall10";
scene.add(wall10);
//wall 11
const wall11 = new THREE.Mesh(boxGeo, boxMat);
wall11.position.set(39.5, 3.5, -2.5);
wall11.rotation.y = Math.PI / 2;
wall11.name = "wall11";
scene.add(wall11);
//wall 12
const wall12 = new THREE.Mesh(boxGeoPanjang2, boxMat);
wall12.position.set(25, 3.5, -20);
wall12.name = "wall12";
scene.add(wall12);

//wall 13
const wall13 = new THREE.Mesh(boxGeo, boxMat);
wall13.position.set(32.5, 3.5, -12.5);
wall13.rotation.y = Math.PI / 2;
wall13.name = "wall13";
scene.add(wall13);
//wall 14
const wall14 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall14.position.set(0, 3.5, -5.5);
wall14.rotation.y = Math.PI / 2;
wall14.name = "wall14";
scene.add(wall14);
//wall 15
const wall15 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall15.position.set(15, 3.5, -5.5);
wall15.rotation.y = Math.PI / 2;
wall15.name = "wall15";
scene.add(wall15);
//wall 16
const wall16 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall16.position.set(-15, 3.5, 9);
wall16.name = "wall16";
scene.add(wall16);
//wall 17
const wall17 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall17.position.set(-15, 3.5, 30);
wall17.rotation.y = Math.PI / 2;
wall17.name = "wall17";
scene.add(wall17);
//wall 18
const wall18 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall18.position.set(-29.5, 3.5, 45);
wall18.name = "wall18";
scene.add(wall18);
//wall 19
const wall19 = new THREE.Mesh(boxGeoPanjang2, boxMat);
wall19.position.set(-44.5, 3.5, 20.5);
wall19.rotation.y = Math.PI / 2;
wall19.name = "wall19";
scene.add(wall19);
//wall 20
const wall20 = new THREE.Mesh(boxGeo, boxMat);
wall20.position.set(-22, 3.5, 15);
wall20.name = "wall20";
scene.add(wall20);
//wall 21
const wall21 = new THREE.Mesh(boxGeo, boxMat);
wall21.position.set(-22, 3.5, 35);
wall21.name = "wall21";
scene.add(wall21);
//wall 22
const wall22 = new THREE.Mesh(boxGeo, boxMat);
wall22.position.set(-37.5, 3.5, 25);
wall22.name = "wall22";
scene.add(wall22);
//wall 23
const wall23 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall23.position.set(-30, 3.5, -4.5);
wall23.name = "wall23";
scene.add(wall23);
//wall 24
const wall24 = new THREE.Mesh(boxGeo, boxMat);
wall24.position.set(-15, 3.5, -11.5);
wall24.rotation.y = Math.PI / 2;
wall24.name = "wall24";
scene.add(wall24);
//wall 25
const wall25 = new THREE.Mesh(boxGeo, boxMat);
wall25.position.set(-40, 3.5, -20);
wall25.rotation.y = Math.PI / 2;
wall25.name = "wall25";
scene.add(wall25);
//wall 26
const wall26 = new THREE.Mesh(boxGeo, boxMat);
wall26.position.set(-25, 3.5, -20);
wall26.rotation.y = Math.PI / 2;
wall26.name = "wall26";
scene.add(wall26);
//wall 27
const wall27 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall27.position.set(-35, 3.5, -28);
wall27.name = "wall27";
scene.add(wall27);
//wall 28
const wall28 = new THREE.Mesh(boxGeo, boxMat);
wall28.position.set(-32.5, 3.5, -12.5);
wall28.rotation.y = Math.PI / 2;
wall28.name = "wall28";
scene.add(wall28);
//wall 29
const wall29 = new THREE.Mesh(boxGeo, boxMat);
wall29.position.set(-37.5, 3.5, -42.5);
wall29.rotation.y = Math.PI / 2;
wall29.name = "wall29";
scene.add(wall29);
//wall 30
const wall30 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall30.position.set(-23, 3.5, -35);
wall30.name = "wall30";
scene.add(wall30);
//wall 31
const wall31 = new THREE.Mesh(boxGeoKeciil, boxMat);
wall31.position.set(-30, 3.5, -39);
wall31.rotation.y = Math.PI / 2;
wall31.name = "wall31";
scene.add(wall31);
//wall 32
const wall32 = new THREE.Mesh(boxGeoKeciil, boxMat);
wall32.position.set(-20, 3.5, -46);
wall32.rotation.y = Math.PI / 2;
wall32.name = "wall32";
scene.add(wall32);
//wall 33
const wall33 = new THREE.Mesh(boxGeo, boxMat);
wall33.position.set(-8.5, 3.5, -35);
wall33.rotation.y = Math.PI / 2;
wall33.name = "wall33";
scene.add(wall33);
//wall 34
const wall34 = new THREE.Mesh(boxGeoPanjang2, boxMat);
wall34.position.set(17, 3.5, -28);
wall34.name = "wall34";
scene.add(wall34);
//wall 35
const wall35 = new THREE.Mesh(boxGeo, boxMat);
wall35.position.set(15, 3.5, -35);
wall35.rotation.y = Math.PI / 2;
wall35.name = "wall35";
scene.add(wall35);
//wall 36
const wall36 = new THREE.Mesh(boxGeo, boxMat);
wall36.position.set(5, 3.5, -42.5);
wall36.rotation.y = Math.PI / 2;
wall36.name = "wall36";
scene.add(wall36);
//wall 37
const wall37 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall37.position.set(29.5, 3.5, -42.5);
wall37.name = "wall37";
scene.add(wall37);
//wall 38
const wall38 = new THREE.Mesh(boxGeoPanjang, boxMat);
wall38.position.set(35, 3.5, -35);
wall38.name = "wall38";
scene.add(wall38);

//ball finish & start
const ballGeo = new THREE.SphereGeometry(2, 20, 20);
const ballMat = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const ballfinish = new THREE.Mesh(ballGeo, ballMat);
ballfinish.position.set(-47.5, 1, -47.5);
ballfinish.name = "finish";
scene.add(ballfinish);
const ballStart = new THREE.Mesh(
  ballGeo,
  new THREE.MeshBasicMaterial({
    color: 0x00fff0,
  })
);
ballStart.position.set(47.5, 1, 47.5);
scene.add(ballStart);

//kontrol
let controls = new THREE.PointerLockControls(cam, renderer.domElement);
let clock = new THREE.Clock();
const blocker = document.getElementById("blocker");
const instructions = document.getElementById("instructions");

instructions.addEventListener("click", function () {
  controls.lock();
  sound1.play();
});

controls.addEventListener("lock", function () {
  instructions.style.display = "none";
  blocker.style.display = "none";
});

controls.addEventListener("unlock", function () {
  blocker.style.display = "block";
  instructions.style.display = "";
  sound1.pause();
});

let keyboard = [];
addEventListener("keydown", (e) => {
  keyboard[e.key] = true;
});
addEventListener("keyup", (e) => {
  keyboard[e.key] = false;
});
let count = 3;
function processKeyboard(delta) {
  let speed = 8;
  let actualSpeed = speed * delta;
  let cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone();
  let raycaster = new THREE.Raycaster(controls.getObject().position, cameraDirection);
  let intersects = raycaster.intersectObjects(scene.children, true);
  let range = 0;

  if (intersects.length > 0) {
    intersects.forEach((object) => {
      range = intersects[0].distance;
    });
  }

  if (keyboard[" "]) {
    if (range <= 3 && range > 0) {
      controls.moveForward(0);
    } else {
      controls.moveForward(actualSpeed);
    }
  }

  if (keyboard["r"]) {
    if (range <= 5 && range > 0) {
      var selectedObject = scene.getObjectByName(intersects[0].object.name);
      if (intersects[0].object.name == "finish") {
        document.getElementById("instructions").innerHTML = "You Win";
        document.getElementById("instructions").style = "font-size:36px";
        controls.unlock();
        instructions.removeEventListener("click");
        instructions.removeEventListener("lock");
      } else {
        if (count > 0) {
          if (intersects[0].object.name != "") {
            console.log("removed " + intersects[0].object.name);
            count -= 1;
            document.getElementById("wallremover").innerHTML = "Wall remover : " + count + " left";
            if (count != 0) {
              console.log(count + " wall remover left!");
            } else {
              console.log("used the last 'wall remover'!");
            }
            scene.remove(selectedObject);
          }
        } else {
          console.log("out of 'wall remover'!");
        }
      }
    }
  }
}

function animate() {
  let delta = clock.getDelta();

  processKeyboard(delta);
  requestAnimationFrame(animate);
  renderer.render(scene, cam);
}

animate();
