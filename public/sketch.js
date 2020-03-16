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
	image(video,0,0);
	filter(THRESHOLD, 0.3);

	/**
	 * Load pixels and log pixel length
	 * video.loadPixels();
	 * console.log(video.pixels.length);
	 */
}
