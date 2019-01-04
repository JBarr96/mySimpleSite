var text = new Blotter.Text("Johnathan Barr", {
  family : "serif",
  size : 120,
  fill : "#171717",
  paddingLeft : 40,
  paddingRight : 40
});

// options: ChannelSplitMaterial, FliesMaterial, LiquidDistortMaterial, RollingDistortMaterial, SlidingDoorMaterial
var material = new Blotter.RollingDistortMaterial();
material.uniforms.uSineDistortSpread.value = 0.025;
material.uniforms.uSineDistortCycleCount.value = 2;
material.uniforms.uSineDistortAmplitude.value = 0.3;

material.uniforms.uNoiseDistortVolatility.value = 40;
material.uniforms.uNoiseDistortAmplitude.value = 0.01;
material.uniforms.uDistortPosition.value = 0.5;

material.uniforms.uRotation.value = 275;

material.uniforms.uSpeed.value = 0.1;

var blotter = new Blotter(material, { texts : text });
var scope = blotter.forText(text);

scope.appendTo(document.body);

var canvas;
var bg;

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
}

function draw() {
	bg = mouseX/4;
	background(bg);
	material.uniforms.uSpeed.value = mouseX/1000;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
