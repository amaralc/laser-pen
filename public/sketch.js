// Declara variavel para receber objeto video
var video;
const rThreshold = 254;
const gThreshold = 255;
const bThreshold = 255;
var M00 = 0;
var M01 = 0;
var M10 = 0;
var xBar = 0;
var yBar = 0;
var currentFrame;

var socket;

function setup() {

  // Define framerate
  frameRate(30);

  // Cria objeto video
  video = createCapture(VIDEO);

  // Define tamanho do objeto video
  video.size(320,240);

  // Esconde objeto video
  //video.hide();

  // Cria canvas
  createCanvas(320,240);
  background(0,0,0);

  // Carrega pixels do canvas
  loadPixels();

  // Connect to socket
  socket = io.connect('http://localhost:3333');
}

/** Calcula M00 */
function moment(array,i,j,w,h){

  /** Initialize Mij variable */
  var Mij;

  /** Loop through pixels array */
  for (var y = 0; y < h ; y++){
    for (var x = 0; x < w ; x++){
      var index = (y * w + x ) * 4;

      /** Calculate Mij for red pixels */
      Mij += (x**i)*(y**j)*(array[index]);
    }
  }

  return Mij;
}

/** Log mouse coordinates when mouse is dragged */
function mouseDragged(){
  console.log(`Sending: ${mouseX} , ${mouseY}`);

  var data = {
    "name": "mouse",
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);

  stroke(0,255,0);
  fill(0,255,0);
  ellipse(mouseX, mouseY, 5, 5);
}

function draw() {

  currentFrame = frameCount;

  // Carrega pixels do video
  video.loadPixels();

  //loadPixels();

  var M00 = 0;
  var M01 = 0;
  var M10 = 0;
  var xBar = 0;
  var yBar = 0;

  for (var y = 0; y < height; y++){
    for (var x = 0; x < width; x++){
      var index = (y * width + x ) * 4;

      /** Se  */
      if(pixels[index] <= rThreshold){
        if(video.pixels[index + 1] > 250){ continue; };
        if(video.pixels[index + 2] > 250){ continue; };
        if(video.pixels[index] > rThreshold){
          // Pinta coordenada atual
          pixels[index] = 255;
          // Moments
          M00 += (x**0)*(y**0)*(video.pixels[index]);
          M10 += (x**1)*(y**0)*(video.pixels[index]);
          M01 += (x**0)*(y**1)*(video.pixels[index]);
          // Centroid
          xBar = M10/M00;
          yBar = M01/M00;

          stroke(255,0,0);
          fill(255,0,0);
          ellipse(xBar, yBar, 5, 5)

          var data = {
            "name": "laserPen",
            x: xBar,
            y: yBar
          }

          socket.emit('laserPen', data);
        };
      };
    };
  };

  socket.on('mouse', (data)=>{
    stroke(255,0,255);
    fill(255,0,255);
    ellipse(data.x, data.y, 5, 5);
  });

  socket.on('laserPen',(data)=>{
    stroke(255,0,255);
    fill(255,0,255);
    ellipse(data.x, data.y, 5, 5);
  })
}

