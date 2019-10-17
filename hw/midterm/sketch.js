var halloButton;

var treeImage;

var leafX = [];
var leafY = [];
var leafAmount = 1;
var leafImage;

var puplineColor = "yellow";

function preload(){
  treeImage = loadImage("images/tree.png");
  leafImage = loadImage("images/leaf.png");
} //end of preload

function setup() {
  // put setup code here
  createCanvas(1000,600);
  background("PapayaWhip");

  halloButton = createButton("Happy Halloween! ");
  halloButton.position(10,10);
  halloButton.mousePressed(function(){
    puplineColor = "black";
  });

  image(treeImage, 300,5,900,460);

  for(var i = 0; i < leafAmount; i++){
    leafX[i] = random(0,width);
    leafY[i] = random(0,-600);
  }
  console.log("leafX" + leafX);
  console.log("leafY" + leafY);

} //end of setup

function draw() {
  // put drawing code here

  stroke("LightYellow");
  strokeWeight(1);
  fill("orange");
  rect(610,450,155,125,80); //pumpkin2 big
  rect(530,475,135,105,80); //pumpkin1 small
  rect(730,450,135,105,80); //pumpkin3 small
  rect(820,460,155,125,80); //pumpkin4 big

  stroke("green");
  fill("green");
  rect(575,465,38,14,85); //p1
  rect(665,440,45,14,85); //p2
  rect(777,440,38,14,85); //p3
  rect(872,450,45,14,85); //p4

  stroke("LightYellow");
  strokeWeight(0.5);
  fill(puplineColor);
  triangle(555,496,548,517,555,562); //pumpkin1-1
  triangle(568,488,578,507,585,566); //pumpkin1-2
  triangle(598,496,604,527,600,568); //pumpkin1-3
  triangle(635,486,640,522,620,560); //pumpkin1-4
  triangle(675,479,688,520,675,550); //pumpkin2-1
  triangle(700,466,710,527,700,568); //pumpkin2-2
  triangle(755,469,748,500,755,535); //pumpkin3-1
  triangle(775,479,768,520,775,550); //pumpkin3-2
  triangle(790,466,800,527,790,548); //pumpkin3-3
  triangle(855,472,848,517,855,569); //pumpkin4-1
  triangle(875,469,880,527,875,579); //pumpkin4-2
  triangle(898,476,910,527,900,578); //pumpkin4-3
  triangle(928,469,940,522,920,580); //pumpkin4-4

  stroke(0);
  strokeWeight(3);
  fill("WhiteSmoke");
  rect(100,120,30,120); //chimney tall
  rect(90,100,50,20); //chimney wide

  fill("Lavender");
  circle(220,420,20,20); //door???
  rect(50,280,340,280); //door
  triangle(50,280,390,280, 220,85); //roof
  rect(80,400,150,160); //house

  //rect(90,320,90,70, 30,30);
  fill(255);
  rect(260,320,90,70, 30,30); //window
  line(260,355,350,355); //horizontal
  line(305,320,305,390); //vertical

  for(var l = 0; l < leafAmount; l++){
    if(leafY[l]<height - 20){
      leafY[l]++;
      leafX[l] = leafX[l] + sin(radians(frameCount));
    }
    image(leafImage, leafX[l], leafY[l], 20,20);
  }

} //end of draw
