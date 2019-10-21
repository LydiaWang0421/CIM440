var halloButton;
var autumnButton;

var treeImage;
var htreeImage;
var trickImage;
var witchImage;

var htree = false;
var trick = false;
var witch = false;

var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;

var batX = [];
var batY = [];
var batAmount = 80;
var batImage;

var puplineColor = "yellow";
var houseColor = "Lavender";
var houseStroke = 0;

function preload(){
  treeImage = loadImage("images/tree.png");
  leafImage = loadImage("images/leaf.png");

  htreeImage = loadImage("images/htree.png");
  batImage = loadImage("images/bat.png");
  trickImage = loadImage("images/trick.png");
  witchImage = loadImage("images/witch.png");

} //end of preload

function setup() {
  // put setup code here
  createCanvas(1000,600);

  for(var i = 0; i < leafAmount; i++){
    leafX[i] = random(0,width);
    leafY[i] = random(0,-600);
  }
  console.log("leafX" + leafX);
  console.log("leafY" + leafY);

  halloButton = createButton("Happy Halloween! ");
  halloButton.position(10,10);
  halloButton.mousePressed(function(){
    trick = true;
    htree = true;
    witch = true;

    puplineColor = "black";
    houseColor = "DarkSlateGray";
    houseStroke = 255;

    for(var i = 10; i < batAmount; i++){
      batX[i] = random(0,1000);
      batY[i] = random(600,300);
    }
    console.log("batX" + batX);
    console.log("batY" + batY);

  }); //end of halloween button

  autumnButton = createButton("Back to Autumn! ");
  autumnButton.position(10,30);
  autumnButton.mousePressed(function(){
    trick = false;
    htree = false;
    witch = false;

    puplineColor = "yellow";
    houseColor = "Lavender";
    houseStroke = 0;
  });

} //end of setup

function draw() {
  // put drawing code here
  background("PapayaWhip");

  if(htree == false){
  image(treeImage, 300,5,900,460);
  }

  if(htree == true){
  image(htreeImage, 425,5,640,965);
  }

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
  triangle(810,466,818,477,810,548); //pumpkin3-4
  triangle(855,472,848,517,855,569); //pumpkin4-1
  triangle(875,469,880,527,875,579); //pumpkin4-2
  triangle(898,476,910,527,900,578); //pumpkin4-3
  triangle(942,482,940,522,920,574); //pumpkin4-4

  stroke(0);
  strokeWeight(3);
  fill("WhiteSmoke");
  rect(100,120,30,120); //chimney tall
  rect(90,100,50,20); //chimney wide

  stroke("Silver");
  noFill();
  arc(90,58,40,60,HALF_PI,PI); //smoke1
  arc(100,60,20,60,HALF_PI,PI); //smoke2
  arc(110,62,40,60,0,HALF_PI); //smoke3
  arc(130,52,40,80,0,HALF_PI); //smoke4

  stroke(houseStroke);
  fill(houseColor);
  rect(50,280,340,280); //house
  triangle(40,280,400,280,220,75); //roof
  triangle(60,280,380,280,220,95);
  rect(40,280,360,4);
  rect(78,400,152,160);
  rect(80,400,150,160); //door
  rect(120,500,70,60); //door small
  circle(100,460,20,20);

  stroke(0);
  fill(255);
  rect(255,310,100,90, 30,30); //window frame
  rect(260,320,90,70, 30,30); //window
  line(260,355,350,355); //horizontal
  line(305,320,305,390); //vertical
  triangle(160,215,280,215,220,130); //window higher frame
  triangle(170,210,270,210,220,140); //window higher
  line(220,140,220,210);

  for(var l = 0; l < leafAmount; l++){
    if(leafY[l]<height - 20){
      leafY[l]++;
      leafX[l] = leafX[l] + sin(radians(frameCount));
    }
    image(leafImage, leafX[l], leafY[l], 20,20);
  }

  //halloween
  for(var b = 0; b < batAmount; b++){
    if(batY[b]<height){
      batY[b]--;
      batX[b] = batX[b] + sin(radians(frameCount));
    }
    image(batImage, batX[b], batY[b], 40,40);
  }

  if(trick == true){
  image(trickImage, 320,410,trickImage.width/6,trickImage.height/7);
  }

  if(witch == true){
  image(witchImage, 350,5,witchImage.width/6,witchImage.height/6);
  }

} //end of draw
