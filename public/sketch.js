// Declara variavel para receber objeto video
var video;
const rThreshold = 254;
const gThreshold = 255;
const bThreshold = 255;

function setup() {

  frameRate(30);

  // Cria objeto video
  video = createCapture(VIDEO);

  // Define tamanho do objeto video
  video.size(320,240);

  // Esconde objeto video
  video.hide();

  // Cria canvas
  createCanvas(320,240);
  background(0,0,0);

  // Carrega pixels do canvas
  loadPixels();
}

function rgbFilter(pixels, rThreshold, gThreshold, bThreshold){

  // Varre array de pixels [R, G, B, A, R, G, B, A, ...]
  for (var i = 0; i < pixels.length; i += 4) {

    // Edita R < rThreshold
    if (pixels[i] <= rThreshold){pixels[i] *= 0};
    // Edita G < gThreshold
    if (pixels[i+1] <= gThreshold){pixels[i+1] *= 0};
    // Edita B < bThreshold
    if (pixels[i+2] <= bThreshold){pixels[i+2] *= 0};
  }

  // Retorna screenshot atualizado
  return pixels;
}

function draw() {

  // Carrega pixels do video
  video.loadPixels();
  stroke(255,0,0);
  fill(255,0,0);

  for (var y = 0; y < height; y++){
    for (var x = 0; x < width; x++){
      var index = (y * width + x ) * 4;

      /** Se  */
      if(pixels[index] <= rThreshold){

        if(video.pixels[index + 1] > 250){ continue; };
        if(video.pixels[index + 2] > 250){ continue; };
        if(video.pixels[index] > rThreshold){
          //pixels[index] = 255;
          ellipse(x,y,5,5);
        }else{
          //pixels[index] = 0;
        }
      }
    };
  }

  console.log(frameCount);
  /*

  // Filtra
  // Varre array de pixels [R, G, B, A, R, G, B, A, ...]
  for (var i = 0; i < video.pixels.length; i += 4) {
    // Se pixel vermelho tem valor menor que threshold
    if(pixels[i]<=rThreshold){
      // ... e pixel vermelho do video tem valor maior que threshold
      if(video.pixels[i] > rThreshold){
        // ... substituti
        pixels[i] = 255
      }else{
        pixels[i] = 0;
      }
    }
    // Edita G < gThreshold
    if (video.pixels[i+1] <= gThreshold){pixels[i+1] = 0};
    // Edita B < bThreshold
    if (video.pixels[i+2] <= bThreshold){pixels[i+2] = 0};
  }

  */

  // Update pixels do canva
  //updatePixels();
}
