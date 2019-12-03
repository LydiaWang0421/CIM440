var parkImage;
var signImage;
var chessImage;
var ropeImage;
var seesawImage;
var birdImage;

var stretchy;
var face;

var signClick;
var swingClick;
var slideClick;
var chessClick;
var ropeClick;
var seesawClick;

var balloonX = [];
var balloonY = [];
var balloonAmount = 30;
var balloonImage;

var chessShow = false;
var chessVid;

var ropeShow = false;
var asterisk;
var platform;
var GRAVITY = 1;
var JUMP = 15;

function preload(){
  parkImage = loadImage("images/park.png");
  signImage = loadImage("images/sign.png");
  chessImage = loadImage("images/chess.png");
  ropeImage = loadImage("images/rope.png");
  seesawImage = loadImage("images/seesaw.png");
  birdImage = loadImage("images/bird.png");

  balloonImage = loadImage("images/balloon.png");

  chessVid = createVideo("images/chessvid.mp4");

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
  this.text = "PLAYGROUND RULES";
  this.textColor = "white";
  }
  signClick.onOutside = function(){
  this.color = "NavajoWhite";
  this.text = " Hello My Friend";
  this.textColor = "black";
  }
  signClick.onPress = function(){
    alert("Click OK to see PLAYGROUND RULES");
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
    alert("Kids should always sit in the swing, not stand or kneel. They should hold on tightly with both hands while swinging, and when finished swinging, stop the swing completely before getting off. Children should stay a safe distance from other kids on swings, being careful not to run or walk in front of or in back of moving swings. Kids should never ride with more than one child to a swing. Swings are designed to safely hold only one person. ");
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
    alert("Kids should always slide down feet first and sitting up, never head first or on their back or stomach. Only one child should be on the slide platform at a time, and kids shouldn't slide down in groups. Kids should always check that the bottom of the slide is clear before sliding down. ");
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
      chessVid.hide();
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
    }else{
      ropeShow = true;
    }
    asterisk = createSprite(865,100);
    asterisk.addAnimation('normal', 'play/examples/assets/asterisk_normal0001.png', 'play/examples/assets/asterisk_normal0003.png');
    asterisk.addAnimation('stretch', 'play/examples/assets/asterisk_stretching0001.png', 'play/examples/assets/asterisk_stretching0008.png');
    asterisk.setCollider('circle', 0, 0, 64);

    platform = createSprite(865,330);
    platform.addAnimation('normal', 'play/examples/assets/small_platform0001.png', 'play/examples/assets/small_platform0003.png');
  }

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
    alert("Seesaw seats are like swings: one child per seat. A child who is too light to seesaw with a partner should find a different partner — not add another child to his or her side of the seesaw. Kids should always sit facing one another, not turned around. Teach kids to hold on tightly with both hands while on a seesaw, not to touch the ground or push off with their hands, and to keep feet to the sides, out from underneath the seesaw. Kids should stand back from a seesaw when it's in use. They should never stand beneath a raised seesaw, stand and rock in the middle, or try to climb onto it while it's in motion. ");
  }

  chessVid.hide();


} //end of setup

function draw() {
  // put drawing code here
  background("#D3F5F2");

  image(parkImage, 20,0, parkImage.width/2, parkImage.height/2);
  image(signImage, 410,460, signImage.width/4, signImage.height/4);
  image(chessImage, 720,420, chessImage.width/10, chessImage.height/10);
  if(chessShow == true){
    rect(790,420,205,165);
    text("The player controlling the white pieces is named 'White'; the player controlling the black pieces is named 'Black'. White moves first, then players alternate moves. Making a move is required; it is not legal to skip a move, even when having to move is detrimental. Play continues until a king is checkmated, a player resigns, or a draw is declared. ", 795,430,200,170);
    chessVid.show();
    chessVid.play();
    chessVid.size(240,230);
    chessVid.position(790,300);
  }

  image(ropeImage, 580,220, ropeImage.width/4, ropeImage.height/4);
  if(ropeShow == true){
    rect(490,360,165,165);
    text("In speed events, a jumper alternates their feet with the rope going around the jumper every time one of their feet hit the ground for 30 seconds, one minute, or three minutes. The jumper is judged on the number of times the right foot touches the ground in those times. ", 495,370,160,170);
    rect(750,10,230,360);
    fill(0);
    textAlign(CENTER);
    text('Press X to jump!', width/2, 20);
    asterisk.velocity.y += GRAVITY;
    if(asterisk.collide(platform)) {
      asterisk.velocity.y = 0;
      asterisk.changeAnimation('normal');
    }
    if(keyWentDown('x') || mouseWentDown(LEFT))
    {
      asterisk.changeAnimation('stretch');
      asterisk.animation.rewind();
      asterisk.velocity.y = -JUMP;
    }
  }

  image(seesawImage, 320,330, seesawImage.width/5, seesawImage.height/5);
  image(birdImage, 220,90, birdImage.width/6, birdImage.height/6);

  stretchy.velocity.x = (mouseX-stretchy.position.x)/10;
  stretchy.velocity.y = (mouseY-stretchy.position.y)/10;
  drawSprites();

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
