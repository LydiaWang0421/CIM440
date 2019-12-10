var parkImage;
var signImage;
var chessImage;
var ropeImage;
var jumpropeImage;
var seesawImage;
var birdImage;
var dogImage;

var stretchy;
var face;

var signClick;
var swingClick;
var slideClick;
var chessClick;
var ropeClick;
var seesawClick;

var asterisk;
var platform;
var GRAVITY = 1;
var JUMP = 15;

var balloonX = [];
var balloonY = [];
var balloonAmount = 30;
var balloonImage;

var swingShow = false;
var slideShow = false;
var chessShow = false;
var ropeShow = false;
var seesawShow = false;

var slideVid;
var chessVid;

var birdX = 265;
var birdY = 105;
var birdW = 20;
var birdH = 20;

var dogX = 845;
var dogY = 220;
var dogW = 20;
var dogH = 20;

function preload(){
  parkImage = loadImage("assets/park.png");
  signImage = loadImage("assets/sign.png");
  chessImage = loadImage("assets/chess.png");
  ropeImage = loadImage("assets/rope.png");
  jumpropeImage = loadImage("assets/jumprope.png");
  seesawImage = loadImage("assets/seesaw.png");
  birdImage = loadImage("assets/bird.png");
  dogImage = loadImage("assets/dog.png");

  balloonImage = loadImage("assets/balloon.png");

  chessVid = createVideo("assets/chessvid.mp4");
  slideVid = createVideo("assets/slidevid.mp4");

} //end of preload

function setup() {
  // put setup code here
  var cnv = createCanvas(1000,600);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");
  select("#container0").html("<h1>HAPPYGROUND</h1>");
  select("#container0").style("color", "white");
  select("#container0").style("text-align", "center");
  select("#container0").style("width", "1020px");
  select("#container0").style("margin", "auto auto");
  cnv.parent("#container0");
  select('body').style("background-color", "#99D3DF");

  for(var i = 10; i < balloonAmount; i++){
    balloonX[i] = random(0,1000);
    balloonY[i] = random(height, height + 300);
  }
  console.log("balloonX" + balloonX);
  console.log("balloonY" + balloonY);

  face = loadImage('play/examples/assets/asterisk_explode0008.png');
  stretchy = createSprite();
  stretchy.draw = function() {
    fill("LightPink");
    push();
    rotate(radians(this.getDirection()));
    ellipse(0, 0, 80+this.getSpeed(), 80-this.getSpeed());
    pop();
    image(face, this.deltaX*2, this.deltaY*2);
  };
  stretchy.maxSpeed = 10;

  signClick = new Clickable();
  signClick.locate(430,485);
  signClick.resize(120,30);
  signClick.onHover = function(){
  this.color = "SaddleBrown";
  this.text = "HAPPYGROUND";
  this.textColor = "white";
  }
  signClick.onOutside = function(){
  this.color = "NavajoWhite";
  this.text = " Hello My Friend";
  this.textColor = "black";
  }
  signClick.onPress = function(){
    alert("Welcome to HAPPYGROUND! You can have fun here! Please click the stars to see the rules of each playground equipment, and hover over the animals to explore more! Now click OK to see general PLAYGROUND RULES! ");
    alert("PLAYGROUND RULES: Use playground at own risk. Children under the age of 12 must be accompanied by an adult. No glass or alcoholic beverages. Proper footwear required. Improper use of equipment prohibited. Playground hours from 8:00 am to 7:30 pm. ");
  }

  swingClick = new Clickable();
  swingClick.locate(120,350);
  swingClick.resize(60,20);
  swingClick.onHover = function(){
  this.color = "Maroon";
  this.text = "SWING";
  this.textColor = "white";
  }
  swingClick.onOutside = function(){
  this.color = "white";
  this.text = "★";
  this.textColor = "black";
  }
  swingClick.onPress = function(){
    if(swingShow == true){
      swingShow = false;
    }else{ 
      swingShow = true;
    }
  }

  slideClick = new Clickable();
  slideClick.locate(440,90);
  slideClick.resize(60,20);
  slideClick.onHover = function(){
  this.color = "Maroon";
  this.text = "SLIDES";
  this.textColor = "white";
  }
  slideClick.onOutside = function(){
  this.color = "white";
  this.text = "★";
  this.textColor = "black";
  }
  slideClick.onPress = function(){
    if(slideShow == true){
      slideShow = false;
      slideVid.hide();
    }else{
      slideShow = true;
    }
  }

  chessClick = new Clickable();
  chessClick.locate(753,405);
  chessClick.resize(60,20);
  chessClick.onHover = function(){
  this.color = "Maroon";
  this.text = "CHESS";
  this.textColor = "white";
  }
  chessClick.onOutside = function(){
  this.color = "white";
  this.text = "★";
  this.textColor = "black";
  }
  chessClick.onPress = function(){
    if(chessShow == true){
      chessShow = false;

    }else{
      chessShow = true;
    }
  }

  ropeClick = new Clickable();
  ropeClick.locate(660,330);
  ropeClick.resize(80,40);
  ropeClick.onHover = function(){
  this.color = "Maroon";
  this.text = "JUMPING ROPES";
  this.textColor = "white";
  }
  ropeClick.onOutside = function(){
  this.color = "white";
  this.text = "★";
  this.textColor = "black";
  }
  ropeClick.onPress = function(){
    if(ropeShow == true){
      ropeShow = false;
      asterisk.visible = false;
      platform.visible = false;

    }else{
      ropeShow = true;
      asterisk.visible = true;
      platform.visible = true;

    }
  }

  asterisk = createSprite(850, 100);
  asterisk.addAnimation('normal', 'play/examples/assets/asterisk_normal0001.png', 'play/examples/assets/asterisk_normal0003.png');
  asterisk.addAnimation('stretch', 'play/examples/assets/asterisk_stretching0001.png', 'play/examples/assets/asterisk_stretching0008.png');
  asterisk.setCollider('circle', 0, 0, 64);

  platform = createSprite(850, 300);
  platform.addAnimation('normal', 'play/examples/assets/small_platform0001.png', 'play/examples/assets/small_platform0003.png');

  asterisk.visible = false;
  platform.visible = false;

  seesawClick = new Clickable();
  seesawClick.locate(410,375);
  seesawClick.resize(65,20);
  seesawClick.onHover = function(){
  this.color = "Maroon";
  this.text = "SEESAW";
  this.textColor = "white";
  }
  seesawClick.onOutside = function(){
  this.color = "white";
  this.text = "★";
  this.textColor = "black";
  }
  seesawClick.onPress = function(){
    if(seesawShow == true){
      seesawShow = false;
    }else{
      seesawShow = true;
    }
  }

  chessVid.hide();
  slideVid.hide();

} //end of setup

function draw() {
  // put drawing code here
  background("#D3F5F2");

  image(parkImage, 20,0, parkImage.width/2, parkImage.height/2);

  image(signImage, 410,460, signImage.width/4, signImage.height/4);
  image(chessImage, 720,420, chessImage.width/10, chessImage.height/10);
  image(ropeImage, 580,220, ropeImage.width/4, ropeImage.height/4);
  image(seesawImage, 320,330, seesawImage.width/5, seesawImage.height/5);

  if(mouseX > birdX && mouseX < birdX+birdW && mouseY > birdY && mouseY < birdY+birdH){
    console.log("In rectangle");
    rect(25,5,153,170);
    text("Birds, also known as Aves or avian dinosaurs, are a group of endothermic vertebrates, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.", 30,10,150,200);
  }
  fill("black");
  text("This is a BIRD!", birdX-5, birdY-15);
  fill("white");
  rect(birdX,birdY,birdW,birdH);
  image(birdImage, 220,90, birdImage.width/6, birdImage.height/6);

  if(mouseX > dogX && mouseX < dogX+dogW && mouseY > dogY && mouseY < dogY+dogH){
    console.log("In rectangle");
    rect(725,15,155,170);
    fill("black");
    text("The domestic dog (Canis lupus familiaris when considered a subspecies of the wolf or Canis familiaris when considered a distinct species)[5] is a member of the genus Canis (canines), which forms part of the wolf-like canids,[6] and is the most widely abundant terrestrial carnivore.", 730,20,150,200);
  }
  fill("black");
  text("This is a DOG!", dogX-65, dogY-15);
  fill("white");
  rect(dogX,dogY,dogW,dogH);
  image(dogImage, 830,200, dogImage.width/8, dogImage.height/8);

  stretchy.velocity.x = (mouseX-stretchy.position.x)/10;
  stretchy.velocity.y = (mouseY-stretchy.position.y)/10;
  drawSprites();

  if(swingShow == true){
    fill("white");
    rect(15,40,145,300);
    fill("black");
    text("Kids should always sit in the swing, not stand or kneel. They should hold on tightly with both hands while swinging, and when finished swinging, stop the swing completely before getting off. Children should stay a safe distance from other kids on swings, being careful not to run or walk in front of or in back of moving swings. Kids should never ride with more than one child to a swing. Swings are designed to safely hold only one person. ", 20,50,140,305);
  }

  if(slideShow == true){
    fill("white");
    rect(530,10,425,125);
    fill("black");
    text("Kids should always slide down feet first and sitting up, never head first or on their back or stomach. Only one child should be on the slide platform at a time, and kids shouldn't slide down in groups. Kids should always check that the bottom of the slide is clear before sliding down. ", 535,15,200,145);
    slideVid.play();
    image(slideVid,735,22,slideVid.width/6,slideVid.height/7);
  }

  if(chessShow == true){
    fill("white");
    rect(785,270,210,315);
    fill("black");
    text("The player controlling the white pieces is named 'White'; the player controlling the black pieces is named 'Black'. White moves first, then players alternate moves. Making a move is required; it is not legal to skip a move, even when having to move is detrimental. Play continues until a king is checkmated, a player resigns, or a draw is declared. ", 795,430,200,170);
    chessVid.play();
    image(chessVid,798,290,chessVid.width/7,chessVid.height/6);
  }

  if(ropeShow == true){
    fill("white");
    rect(580,375,135,205);
    rect(743,15,215,335);
    fill("black");
    text("Press x to jump!             In speed events, a jumper alternates their feet with the rope going around the jumper every time one of their feet hit the ground for 30 seconds, one minute, or three minutes. The jumper is judged on the number of times the right foot touches the ground in those times. ", 585,385,130,190);
    asterisk.velocity.y += GRAVITY;
    if(asterisk.collide(platform)){
      asterisk.velocity.y = 0;
      asterisk.changeAnimation('normal');
    }
    if(keyWentDown('x') || mouseWentDown(LEFT)){
      image(jumpropeImage, 750,120, jumpropeImage.width/3, ropeImage.height/4);
      asterisk.changeAnimation('stretch');
      asterisk.animation.rewind();
      asterisk.velocity.y = -JUMP;
    }
    drawSprites();
  }

  if(seesawShow == true){
    fill("white");
    rect(185,150,200,210);
    fill("black");
    text("Seesaw seats are like swings: one child per seat. A child who is too light to seesaw with a partner should find a different partner — not add another child to his or her side of the seesaw. Kids should always sit facing one another, not turned around. Teach kids to hold on tightly with both hands while on a seesaw, not to touch the ground or push off with their hands, and to keep feet to the sides, out from underneath the seesaw. ", 190,160,195,190);
  }

  signClick.draw();
  swingClick.draw();
  slideClick.draw();
  chessClick.draw();
  ropeClick.draw();
  seesawClick.draw();

  for(var b = 0; b < balloonAmount; b++){
    if(balloonY[b] > -100){
      balloonY[b]--;
      balloonX[b] = balloonX[b] + sin(radians(frameCount));
    }
    image(balloonImage, balloonX[b], balloonY[b], 60,60);
  }

} //end of draw
