const scene = new THREE.Scene();

const camera =new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight , 0.1 ,1000);



const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);


const geometry = new THREE.CylinderGeometry( 3, 3, .5, 100 );



const texture =new THREE.TextureLoader().load('images/logo.png');

const material = new THREE.MeshBasicMaterial( {map: texture } );

const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );


camera.position.z =10;


document.addEventListener('mousemove' ,onMouseMotion)

let mouseX=0;
let mouseY=0;

let targetX=0;
let targetY=0;

const windowHalfX=window.innerHeight/2
const windowHalfY=window.innerHeight/2

function onMouseMotion(event){
mouseX=(event.clientX - windowHalfX);
mouseY=(event.clientY - windowHalfY);
}

function animate(){
    requestAnimationFrame(animate);
   
   
    targetX =mouseX*0.005;
    targetY =mouseY*0.005;

    cylinder.rotation.z+=0.01;

    cylinder.rotation.y+=.5*(targetX-cylinder.rotation.y);
    cylinder.rotation.x+=.5*(targetY-cylinder.rotation.x);

    renderer.render(scene,camera);
}
animate();

