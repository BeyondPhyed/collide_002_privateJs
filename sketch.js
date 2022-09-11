/*
https://p5play.org/
https://piqnt.com/planck.js/
*/

let ball, floor, floor2;
var width, height;
var ang1, ang2

function setup() {
  width = windowWidth; height = windowHeight;
  createCanvas(width, height);
  world.gravity.y = 10;

  ball = new Sprite();
  ball.diameter = 50;
  ball.x = random(0.5*width);
  ball.y = 0.25*height;
  
  ball.bounciness = 0.5;
  ang1 = 10;
  ang2 = 20;

  floor = new Sprite();
  floor.collider = 'static';   //floor.collider = 'none';
  floor.w = 0.3*width;
  floor.h = 10;
  floor.rotation = ang1;
  floor.x = 0.25*width;
  floor.y = 0.4*height;
  
  floor2 = new Sprite();
  floor2.collider = 'static';
  floor2.w = 0.4*width;
  floor2.h = 10;
  floor2.rotation = ang2;
  floor2.x = floor.x + 0.5*floor.w*cos(ang1) + 0.5*floor2.w*cos(ang2);
  floor2.y = floor.y + 0.5*floor.w*sin(ang1) + 0.5*floor2.w*sin(ang2);  
  
  // line and ball
  new Sprite(250, 100, [300, 10, 200, 20], 'static');
  new Sprite(random(100), 0, 20); // ball
}

function draw() {
  if (mouse.held()) {
	ball.move(mouse.x, mouse.y, 8);
  }
  
  clear();
}
