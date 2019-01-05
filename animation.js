// blotter.js -------------------------------------------------------------------

// Name -----------------------------------------------------------------

var name1 = new Blotter.Text("Johnath", {
  family : "serif",
  size : 120,
  fill : "#FFFFFF",
  paddingLeft : 40,
  paddingRight : 0
});

var name2 = new Blotter.Text("an Barr", {
  family : "serif",
  size : 120,
  fill : "#000",
  paddingLeft : 0,
  paddingRight : 40
});

// options: ChannelSplitMaterial, FliesMaterial, LiquidDistortMaterial, RollingDistortMaterial, SlidingDoorMaterial
var material = new Blotter.RollingDistortMaterial();
// material.uniforms.uSineDistortSpread.value = 0.2;
// material.uniforms.uSineDistortCycleCount.value = 2;
// material.uniforms.uSineDistortAmplitude.value = 0.3;
// material.uniforms.uSpeed.value = 5000;
//
//
material.uniforms.uNoiseDistortVolatility.value = 40;
material.uniforms.uNoiseDistortAmplitude.value = 0.015;
// material.uniforms.uDistortPosition.value = 0.5;
//
material.uniforms.uRotation.value = 275;
//
// material.uniforms.uSpeed.value = 0.1;


var blotter = new Blotter(material, { texts : name1 });
var blotter2 = new Blotter(material, { texts : name2 });

var scope = blotter.forText(name1);
var scope2 = blotter2.forText(name2);

//
// scope.appendTo(document.body);
// scope2.appendTo(document.body);

var container = document.getElementById("name");
// var container = document.querySelector('.name');
//
scope.appendTo(container)
scope2.appendTo(container)


// Work -----------------------------------------------------------

var work = new Blotter.Text("Work", {
  family : "serif",
  size : 100,
  fill : "#FFFFFF",
  paddingLeft : 40,
  paddingRight : 40
});

var material3 = new Blotter.FliesMaterial();
material3.uniforms.uPointCellWidth.value = 0.02;
material3.uniforms.uPointRadius.value = 0.8;

var blotter3 = new Blotter(material3, { texts : work });

var scope3 = blotter3.forText(work);

var container3 = document.getElementById("work");
// var container = document.querySelector('.name');
//
scope3.appendTo(container3)




// Play -----------------------------------------------------------

var play = new Blotter.Text("Play", {
  family : "serif",
  size : 100,
  fill : "#000",
  paddingLeft : 40,
  paddingRight : 40
});

var material4 = new Blotter.ChannelSplitMaterial();

var blotter4 = new Blotter(material4, { texts : play });

var scope4 = blotter4.forText(play);

var container4 = document.getElementById("play");

scope4.appendTo(container4)






// p5.js -------------------------------------------------------------------

var canvas;
var bg;
var x1;

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
}

function draw() {
	// noStroke();
	fill(0);
	rect(0,0,windowWidth/2, windowHeight);
	fill(255);
	rect(windowWidth/2,-1,windowWidth/2, windowHeight+1);

	if(mouseX < windowWidth/2){
		x1 = 0;
		fill(255);
		stroke(255);
		//verticle line
		line(mouseX, 0, mouseX, windowHeight);
		//horizontal line
		line(0, mouseY, windowWidth, mouseY);
		stroke(0);
		//continued horizontal line
		line(windowWidth/2, mouseY, windowWidth, mouseY);

	}
	else{
		x1 = windowWidth;
		fill(0);
		stroke(0);
		//verticle line
		line(mouseX, 0, mouseX, windowHeight);
		//horizontal line
		line(0, mouseY, windowWidth, mouseY);
		stroke(255);
		//continued horizontal line
		line(0, mouseY, windowWidth/2, mouseY);

	}
	// triangle(x1, windowHeight, windowWidth/2, windowHeight, mouseX, mouseY);


	//y line

	// bg = mouseX/4;
	// background(bg);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
