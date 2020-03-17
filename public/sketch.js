// Declara variavel para receber objeto video
var video;

function setup() {
  // Cria objeto video
  video = createCapture(VIDEO);

  // Define tamanho do objeto video
  video.size(320,240);

  // Esconde objeto video
  video.hide();

  // Cria canvas
	createCanvas(320,240);
}

function rgbFilter(video, rThreshold, gThreshold, bThreshold){

  // Carrega array de pixels
  video.loadPixels();

  // Varre array de pixels [R, G, B, A, R, G, B, A, ...]
  for (var i = 0; i < video.pixels.length; i += 4) {

    // Edita R < rThreshold
    if (video.pixels[i] < rThreshold){video.pixels[i] *= 0};
    // Edita G < gThreshold
    if (video.pixels[i+1] < gThreshold){video.pixels[i+1] *= 0};
    // Edita B < bThreshold
    if (video.pixels[i+2] < bThreshold){video.pixels[i+2] *= 0};

  }

  // Atualiza pixels
  video.updatePixels();

  // Retorna video atualizado
  return video;
}

function draw() {

  video = rgbFilter(video, 250, 256, 256)
	image(video,0,0);

}
