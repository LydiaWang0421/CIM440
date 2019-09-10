var eyeSize = 20;
var headSize = 100;
var shirtSize = 40;
var buttonSize = 10;

function setup() {
  // put setup code here
  createCanvas(460,600);
  background(0,30); //lightgray
}

function draw() {
  // put drawing code here
  strokeWeight(1);

  fill(255); //white
  ellipse(220,120,headSize,headSize); //head

  fill(0,170); //darkgray
  ellipse(200,110,eyeSize,eyeSize); //left eye
  ellipse(240,110,eyeSize,eyeSize); //right eye

  fill(255,0,0); //red
  arc(220,133,25,50,0,PI); //mouth

  strokeWeight(5);
  point(220,120); //nose

  strokeWeight(1);

  fill(255); //white
  rect(210,170,20,23); //neck

  fill(136,206,250); //lightskyblue
  rect(172,193,100,120); //body
  rect(132,193,shirtSize,shirtSize); //leftshirt
  rect(272,193,shirtSize,shirtSize); //rightshirt

  fill(255); //white
  ellipse(220,210,buttonSize,buttonSize); //button1
  ellipse(220,235,buttonSize,buttonSize); //button2
  ellipse(220,260,buttonSize,buttonSize); //button3
  ellipse(220,285,buttonSize,buttonSize); //button3

  fill(255); //white
  rect(72,198,60,30); //left arm
  rect(312,198,60,30); //right arm

  fill(0,0,139); //darkblue
  rect(175,313,40,110); //left leg
  rect(230,313,40,110); //right leg

  fill(255); //white
  rect(185,423,20,15); //left foot
  rect(240,423,20,15); //right foot

  fill(0); //black
  rect(150,438,60,25); //left shoe
  rect(235,438,60,25); //right shoe

}
