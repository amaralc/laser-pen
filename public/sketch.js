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

  // Filtra
  // Varre array de pixels [R, G, B, A, R, G, B, A, ...]
  for (var i = 0; i < video.pixels.length; i += 4) {
    // Se pixel vermelho tem valor menor que threshold
    if(pixels[i]<=254){
      // ... e pixel vermelho do video tem valor maior que threshold
      if(video.pixels[i] > 254){
        // ... substituti
        pixels[i] = 255
      }else{
        pixels[i] = 0;
      }
    }
    // Edita G < gThreshold
    if (video.pixels[i+1] <= 255){pixels[i+1] = 0};
    // Edita B < bThreshold
    if (video.pixels[i+2] <= 255){pixels[i+2] = 0};
  }

  // Update
  updatePixels();
	//image(video,0,0);

}
