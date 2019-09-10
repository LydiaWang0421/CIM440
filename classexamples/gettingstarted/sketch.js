function setup() {
  // put setup code here

  createCanvas(500,500);
  background("green");
  background("LemonChiffon");
  background(127); //medium gray color, gray scale 0-255
  background(0); //balck
  background(255); //white
  background(0, 127); //black with a 127 or 50% opacity
  background("#FFFACD"); //lemonchiffon, web color RGB Hex
  background(255,0,0); //red, web color RGB Decimal
  background(0,255,0); //green
  background(0,0,255); //blue
  background(0,128,128); //teal

  fill("cyan");
  stroke(255,0,0);
  ellipse(50,50,50,50);

  fill(0,250,0); //only change the fill color
  ellipse(100,100,25,25);
}

function draw() {
  // put drawing code here
}
