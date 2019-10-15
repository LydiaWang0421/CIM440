
var treeImage;

function preload(){
  treeImage = loadImage("images/htree.png");
} //end of preload

function setup() {
  // put setup code here
  createCanvas(1000,600);
  background("PapayaWhip");

  image(treeImage, 300,5,900,460);

} //end of setup

function draw() {
  // put drawing code here

  stroke(0);
  strokeWeight(1);
  fill("orange");
  rect(730,450,135,105,80); //pumplin small
  rect(820,460,155,125,80); //pumpkin big

  stroke("LightYellow");
  strokeWeight(0.5);
  triangle(755,469,748,500,755,535);

  stroke(0);
  strokeWeight(3);
  fill(255);
  rect(50,280,340,280);
  triangle(50,280,390,280,220,85);

} //end of draw
