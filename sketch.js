/*
https://p5play.org/
https://piqnt.com/planck.js/
*/

let ball, floor, floor2;
var width, height;

function setup() {
  width = windowWidth; height = windowHeight;
  createCanvas(width, height);
  world.gravity.y = 10;

  ball = new Sprite();
  ball.diameter = 50;
  ball.x = 0.2*width;
  ball.y = 0.1*height;
  
  ball.bounciness = 0.5;

  floor = new Sprite();
  floor.collider = 'static';   //floor.collider = 'none';
  floor.x = 0.3*height;
  floor.y = 0.4*height;
  floor.w = 0.2*width;
  floor.h = 10;
  floor.rotation = 10;
  
  floor2 = new Sprite();
  floor2.collider = 'static';
  floor2.x = 0.6*height;
  floor2.y = 0.49*height;
  floor2.w = 0.4*width;
  floor2.h = 10;
  floor2.rotation = 20;
  
  // line and ball
  new Sprite(250, 100, [300, 10, 200, 20], 'static');
  new Sprite(40, 0, 20); // ball
}

function draw() {
  if (mouse.held()) {
	ball.move(mouse.x, mouse.y, 8);
  }
  
  clear();
}