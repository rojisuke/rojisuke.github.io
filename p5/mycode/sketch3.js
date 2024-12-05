//global
//no new libraries

//player
var p1X = 400; //p1 is player
var p1Y = 375;
var pWidth = 70;
var pHeight = 70;

//platforms
var b1X = 200; //b1 for boxes
var b1Y = 300;
var bWidth = 200;
var bHeight = 40;

//game control?
var stage = 0; //keeps track of functions

//setup
function setup() {
 // put setup code here
createCanvas(800,500);
}


//draw
function draw() {
  // put drawing code here
  background (0);
  rectMode(CENTER);
  
  if(keyIsDown(LEFT_ARROW) === true){
    rect(100,100,100,100);
  }


  if(stage == 0){
    game();
  }
}

//game
function game(){
background('#3C3361');

//grass
noStroke();
fill('#2A414E')
rect(width/2,450,width,100);

//window frame
noFill();
stroke(0);
strokeWeight(30);
rect(width/2,height/2,width,height);

//draw player
stroke(0);
strokeWeight(6);
fill('#D2D3E5');
ellipse(p1X,p1Y,pWidth,pHeight);

//draw platform
stroke(0);
strokeWeight(8);
fill('#664633');
rect(b1X,b1Y,bWidth,bHeight)

function keyIsPressed(){
  if (keyCode === LEFT_ARROW) {
    s.dir(-10,0)
  }
  else if (keyCode === RIGHT_ARROW) {
    s.dir(10,0)
  }
}

}