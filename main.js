function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336)
	instializeInSetup(mario);
	canvas.parent('canvas');

	video = createCapture(VIDEO)
	video.size(800,400)
	video.parent('game_console')
	poseNet = ml5.posenet(video,modelloaded)
	poseNet.on('pose',gotposes)
}

function modelloaded() {
	console.log("Model is loaded")
}

function gotposes() {
	if (results.length>0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("Nose X = "+noseX+"Nose Y = "+noseY)
	} 
}

function draw() {
	game();
}






