//global variables, these are available throughout your program
var faceColor = "blue";
var pointX = 0;

function setup() {
  // put setup code here

  //if you declare a variable inside of a block of code ie{}, that variable will only available inside of that block

  var message = "Hello";

  console.log(message);
}

function draw() {
  // put drawing code here

  //console.log(message);
  //Error: not defined, bc message variable scope is only inside the setup

  var drawMessage = "this message is in the draw loop";
  //This creates a new variable everytime the draw loop happens

  console.log(drawMessage);
}
