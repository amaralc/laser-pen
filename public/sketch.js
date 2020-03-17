// Declara variavel para receber objeto video
var video;
var filteredScreen;

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

  // Load
  video.loadPixels();

  // Filter
  filteredScreen = rgbFilter(video.pixels, 200, 255, 255);

  // Update
  video.updatePixels();
	image(video,0,0);

}
