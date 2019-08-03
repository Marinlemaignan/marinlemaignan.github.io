// class PointTitle {
//   constructor(selector) {
//
//   }
// }
//
// let font;
// function preload() {
//   font = loadFont('css/Grenze-Bold.ttf');
// }
//
// let points;
// let bounds;
// function setup() {
//   createCanvas(window.width, window.height);
//   stroke(0);
//   // fill(255, 104, 204);
//   noFill()
//
//   points = font.textToPoints('p5', 0, 0, 10, {
//     sampleFactor: 5,
//     simplifyThreshold: 0
//   });
//   bounds = font.textBounds(' p5 ', 0, 0, 10);
// }
//
// function draw() {
//   background(255,255,255,0);
//   clear();
//   beginShape();
//   translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
//   for (let i = 0; i < points.length; i++) {
//     let p = points[i];
//     vertex(
//       p.x * width / bounds.w +
//         sin(20 * p.y / bounds.h + millis() / 1000) * width / 30,
//       p.y * height / bounds.h
//     );
//   }
//   endShape(CLOSE);
// }


// class PointTitle {
//   constructor(selector) {
//
//   }
// }

let font;
function preload() {
  font = loadFont('assets/css/Grenze-Bold.ttf');
}

let points;
let bounds;
let g = 1;
function setup() {
  var canvas = createCanvas(windowWidth - 40, windowHeight - 40);
  canvas.parent('i_love_that_header')
  stroke(0);
  // fill(255, 255, 204);
  noFill();
  // mouseMoved();
  points = font.textToPoints('Marin le Maignan', 0, 0, 20, {
    sampleFactor: 1,
    simplifyThreshold: 0
  });
  bounds = font.textBounds('Marin le Maignan', 0, 0, 20);
}

function draw() {
  // noLoop();
  clear();
  background(0,0,0,0);
  // beginShape();
  // translate(-bounds.x * width / bounds.w , -bounds.y * height / bounds.h);
  // scale(2)
  var ratio = bounds.w / bounds.h ;
  // translate((windowWidth-(bounds.w*10))/2 , windowHeight);
  translate(windowWidth/2, windowHeight/2);
  translate(-(bounds.w*2  )-40, -bounds.h/2);
  // translate(bounds.w*abs(ratio)*10, bounds.h*abs(ratio)*10)
  var scl ;
  if (bounds.w > windowWidth) {
    scl = windowWidth / bounds.w ;
  } else {
    scl =4
  }

  scale(scl)
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    fill(0, 0, 0, 120);
    noStroke();
    // debugger;
    ellipse(
      p.x  +
        sin(map(winMouseY, 0, height, 0, 50, true) * p.y / bounds.w + millis() / g) * width / 80,
      +p.y ,
    sin(20 * p.y / winMouseX + millis() / g) * height / 400
    );
    // ellipse(
    //   p.x  + (random(2*g)),
    //   p.y + (random(2*g)) +
    //     sin(20 * p.y / bounds.h + millis() / 1000) * height / 30,
    //   2 *  map(g, -10, 10, 0.1, 1, true)
    // );
    // ellipse(p.x, p.y, 7)
  }
  // endShape(CLOSE);

}

//
function mouseMoved() {
  // g = map(event.delta, 0, 100, 0, 1);
  g = map(winMouseY, 0, height, 1000, 4000, true)
  // console.log(g);
  // redraw();
}
//
function windowResized() {
  // g = map(event.delta, 0, 100, 0, 1);
  g = map(winMouseY, 0, height, -10, 10, true)
  // console.log(g);
  resizeCanvas(windowWidth-40, windowHeight-40);
  redraw();
}
