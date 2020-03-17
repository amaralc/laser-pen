var video;
var snapshot;

function setup() {
	video = createCapture(VIDEO);
	video.size(320,240);
	video.hide();
	createCanvas(320,240);
	background(51);
}

function draw() {

  // Carrega array de pixels
  video.loadPixels();

  // Varre array de pixels [R, G, B, A, R, G, B, A, ...]
  for (var i = 0; i < video.pixels.length; i += 4) {

    // Edita R
    if (video.pixels[i] < 200){
      video.pixels[i] *= 0;
    };
    // Edita G
    video.pixels[i + 1] *= 0;
    // Edita B
    video.pixels[i + 2] *= 0;
  }

  video.updatePixels();
	image(video,0,0);

}
