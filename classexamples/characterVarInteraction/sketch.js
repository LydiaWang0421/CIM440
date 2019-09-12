var pointX = 0;
var pointY = 0;

var faceColor = "purple";

var faceButton;

function setup() {
  // put setup code here
  createCanvas(400,400);
  pointX = width/2;
  pointY = height/2;

  console.log("pointX" + pointX + "pointY" + pointY);

  faceButton = createButton("Click to turn orange");
  faceButton.position(20,20);
  faceButton.mousePressed(function(){
    //your action goes in here
    //the button mousePressed function is tied to the general mousePressed function
    faceColor = "orange";
  });


}

function draw() {
  // put drawing code here
  background(255);

  //I want to change the background based, split screen vertically
  //width vertically, height horizontally
  if(mouseX < width/2){
    console.log("left hand side");
    background(255);
  }
  if(mouseX > width/2){
    console.log("right hand side");
    background("green");
  }


  //pointX = 100;
  //pointY = 100;
  pointX = mouseX;
  pointY = mouseY;

  console.log("pointX" + pointX + "pointY" + pointY);

  fill(faceColor);
  rect(pointX-100,pointY-100,200,200);

  ellipse(pointX,pointY, 10,10); //nose

  ellipse(pointX + 20,pointY - 20,30,30); //right eye
  ellipse(pointX - 20,pointY - 20,30,30); //left eye

  arc(pointX,pointY + 10,50,50,0,PI);
  //arc(x,y,width,height,start,end)

} //end of draw


function mousePressed(){
  //faceColor = "red";
}

function mouseReleased(){
  //faceColor = "purple";
}

function keyPressed(){
  console.log("key" + key);
  console.log("keyCode" + keyCode);

  //if statement is true, the execute code inside {}
  // == is oneside equals the other, comparison
  // = means oneside literally equals the other
  //if you press b, then key becomes "b" == "b" which is true
  //key returns a character
  if(key == "b"){
      faceColor = "blue";
  }

  //if you press r, then keyCode becomes 82, 82 == 82 which is true
  //key returns a number
  if(keyCode == 82){
    //82 is r
    faceColor = "red";
  }
}
