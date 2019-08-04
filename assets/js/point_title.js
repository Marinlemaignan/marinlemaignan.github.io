
let font;
let points;
let bounds;
let g = 1;

function preload() {
  font = loadFont('assets/css/Grenze-Bold.ttf');
}

function setup() {
  var canvas = createCanvas(windowWidth - 40, windowHeight - 40);
  canvas.parent('i_love_that_header');
  stroke(0);

  noFill();
  mouseMoved();
  points = font.textToPoints('Marin le Maignan', 0, 0, 20, {
    sampleFactor: 1,
    simplifyThreshold: 0
  });
  bounds = font.textBounds('Marin le Maignan', 0, 0, 20);
}

function draw() {
  clear();

  var scl ;
  var ratio = bounds.w / bounds.h ;

  if (bounds.w > windowWidth) {
    scl = windowWidth / bounds.w ;
  } else {
    scl = 4 ;
  }

  background(0,0,0,0);
  translate(windowWidth/2, windowHeight/2);
  translate(-(bounds.w*2  )-40, -bounds.h/2);

  scale(scl);

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    fill(0, 0, 0, 120);
    noStroke();

    ellipse(
      p.x  + sin(map(winMouseY, 0, height, 0, 50, true) * p.y / bounds.w + millis() / g) * width / 80,
      (+p.y) ,
      sin(20 * p.y / winMouseX + millis() / g) * height / 400
    );
  }
}

function mouseMoved() {
  g = map(winMouseY, 0, height, 1000, 4000, true);
}

function windowResized() {
  g = map(winMouseY, 0, height, -10, 10, true);
  resizeCanvas(windowWidth-40, windowHeight-40);
  redraw();
}
