var ellipseX = 200;
var ellipseY = 200;

function setup() {
 // put setup code here
createCanvas(displayWidth,displayHeight);
background ('pink');
}

function draw() {
  // put drawing code here
  
  if (mouseIsPressed) {
    rect(mouseX,mouseY,200,75);
  }
  else {
    ellipse(mouseX,mouseY,15,15);
  }
}
