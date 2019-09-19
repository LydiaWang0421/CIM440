var eyeSize = 20;
var faceSize = 100;
var shirtSize = 40;
var buttonSize = 10;
var handSize = 25; 

var faceColor = "BlanchedAlmond";
var hairColor = "black";
var shirtColor = "PaleTurquoise";
var buttonColor = "255";
var legColor = "BlueViolet";
var shoeColor = "MediumBlue";

var faceButton;
var suitButton;

function setup() {
  // put setup code here
  createCanvas(460,600);
  background("PapayaWhip"); //papayawhip

  faceButton = createButton("Click to turn to an angry face!");
  faceButton.position(50,530);
  faceButton.mousePressed(function(){
    faceColor = "Crimson"; //darkred
  });

  suitButton = createButton("Click to wear a suit!");
  suitButton.position(50,550);
  suitButton.mousePressed(function(){
    shirtColor = "white";
    buttonColor = "black";
    legColor = "black";
    shoeColor = "black";
  })
}

function draw() {
  // put drawing code here

  if(mouseX < width/2){
    console.log("left hand side");
    background("MistyRose"); //lightgray
  }

  if(mouseX > width/2){
    console.log("right hand side");
    background("Lavender"); //lightpurple
  }

  strokeWeight(1);

  fill(faceColor);
  ellipse(220,120,faceSize,faceSize); //face

  fill(hairColor);
  triangle(180,75,185,84,177,95); //hair1
  triangle(185,84,196,75,193,68); //hair2
  triangle(196,75,207,72,206,61); //hair3
  triangle(207,72,216,70,214,63); //hair4
  triangle(216,70,224,61,226,70); //hair5
  triangle(226,70,236,62,238,73); //hair6
  triangle(238,73,246,77,245,65); //hair7

  fill(0,170); //darkgray
  ellipse(200,110,eyeSize,eyeSize); //left eye
  ellipse(240,110,eyeSize,eyeSize); //right eye
  fill("white"); //white
  ellipse(200,110,5,5);
  ellipse(240,110,5,5);


  fill("LightPink"); //lightpink
  arc(220,139,25,30,0,PI); //mouth

  fill("Chartreuse"); //green
  triangle(240,70,285,50,270,100); //hat
  fill("DeepPink"); //deeppink
  ellipse(285,50,12,12); //hat top

  strokeWeight(6);
  point(220,124); //nose

  strokeWeight(1);

  fill("BlanchedAlmond");
  rect(210,170,20,23); //neck

  fill(shirtColor); //lightblue
  rect(172,193,100,120); //body
  rect(132,193,shirtSize,shirtSize); //left shirt
  rect(272,193,shirtSize,shirtSize); //right shirt
  line(138,193,138,233); //left
  line(306,193,306,233); //right
  triangle(172,193,220,193,210,205); //left collar
  triangle(220,193,268,193,230,205); //right collar

  fill(buttonColor); //white
  ellipse(220,219,buttonSize,buttonSize); //button1
  ellipse(220,244,buttonSize,buttonSize); //button2
  ellipse(220,269,buttonSize,buttonSize); //button3
  ellipse(220,294,buttonSize,buttonSize); //button3

  fill("BlanchedAlmond");
  rect(72,198,60,30); //left arm
  rect(312,198,60,30); //right arm
  ellipse(59,212,handSize,handSize); //left hand
  ellipse(385,212,handSize,handSize); //right hand

  fill(legColor); //purple
  rect(175,313,40,110); //left leg
  rect(230,313,40,110); //right leg
  line(175,415,215,415); //left
  line(230,415,270,415); //right

  fill("BlanchedAlmond");
  rect(185,423,20,15); //left foot
  rect(240,423,20,15); //right foot

  fill(shoeColor); //darkblue
  rect(150,438,60,25); //left shoe
  rect(235,438,60,25); //right shoe
}

function keyPressed(){
  console.log("key" + key);
  console.log("keyCode" + keyCode);

  if(key == "y"){
    shoeColor = "Gold"; //yellow
  }
}
