function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 0.8);
  canvas.parent('top');
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noLoop();  //no te dibujes de nuevo por favor
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
  var palabra = "bewegungsModus";
  fill(255);  //blanco
  background(20, 235, 156);
  textSize(180);
  textAlign(CENTER);
  text(palabra.length, width / 2, height *2/ 3);  //que el número aparezca en el canvas
}
