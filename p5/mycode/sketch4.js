var oldX = 400;
var characterY = 375;

function setup (){
//start with this!
createCanvas(800,500);
background('#3C3361');
textAlign(CENTER);
text('You can run! ...But you cant jump...',400,100);
}

function draw(){
//make stuff now!
if (keyIsDown(LEFT_ARROW) === true) {
	stroke(0);
	strokeWeight(7);
	fill('#D2D3E5')
	circle(oldX -= 4)
	fill('#3C3361')
	stroke('#3C3361')
	rect(0,0,900,900)
}

if (keyIsDown(RIGHT_ARROW) === true){
	stroke(0);
	strokeWeight(7);
	fill('#D2D3E5')
	circle(oldX += 4)
	fill('#3C3361')
	stroke('#3C3361')
	rect(0,0,900,900)
}


//grass
noStroke();
fill('#2A414E')
rect(0,400,width,100);

//frame
noFill();
stroke(0);
strokeWeight(30);
rect(0,0,width,height);

//player
stroke(0);
strokeWeight(7);
fill('#D2D3E5');
circle(oldX,characterY,90)
}