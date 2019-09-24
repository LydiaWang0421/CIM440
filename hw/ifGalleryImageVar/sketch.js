// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22

// rabit "July" by ibm4381 is licensed under CC BY 2.0 https://search.creativecommons.org/photos/cf1cf422-1ca1-45d9-bee6-2ce60483b187
// cat "Cat" by Squirmelia is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/8ebb98d7-cd75-470e-ac97-d67d0c8cbdc5
// lion "DSC_8448" by bobosh_t is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/a1ff0278-5ec1-47da-9c91-aeaf53deda61

var sloth, puppy, dinosaur;
var rabit, cat, lion;

var sButton, pButton, dButton;
var rButton, cButton, lButton;

var currentImage = 0;

var curImage;

function preload(){
  sloth = loadImage("images/sloth.jpg");
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");

  rabit = loadImage("images/rabit.jpg");
  cat = loadImage("images/cat.jpg");
  lion = loadImage("images/lion.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  sButton = createButton("Sloth");
  sButton.mousePressed(function(){
    currentImage = 0;
  })
  sButton.position(360,230);

  pButton = createButton("Puppy");
  pButton.mousePressed(function(){
    currentImage = 1;
  })
  pButton.position(360,250);

  dButton = createButton("Dinosaur");
  dButton.mousePressed(function(){
    currentImage = 2;
  })
  dButton.position(360,270);

  rButton = createButton("Rabit");
  rButton.mousePressed(function(){
    currentImage = 3;
  })
  rButton.position(360,290);

  cButton = createButton("Cat");
  cButton.mousePressed(function(){
    currentImage = 4;
  })
  cButton.position(360,310);

  lButton = createButton("Lion");
  lButton.mousePressed(function(){
    currentImage = 5;
  })
  lButton.position(360,330);

  curImage = sloth;

}

function draw() {
  background(255);

  console.log("currentImage" + currentImage);
  //this is for checking the button from 0 to 5

  // put drawing code here

  image(curImage,0,0,curImage.width/4,curImage.height/4);

  if(currentImage == 0){
    curImage = sloth;
  }else if(currentImage == 1){
    curImage = puppy;
  }else if(currentImage == 2){
    curImage = dinosaur;
  }else if(currentImage == 3){
    curImage = rabit;
  }else if(currentImage == 4){
    curImage = cat;
  }else if(currentImage == 5){
    curImage = lion;
  }

  //image(curImage,0,0,curImage.width/4,curImage.height/4);

}
