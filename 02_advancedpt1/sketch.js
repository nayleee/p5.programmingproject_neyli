//Professor Loveless - MMP 100 - Demo 11/26/19 - Advanced

var diameter = 50; //declaring and initializing our variable
var beginning = 150;
var space = 100;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255, 0, 0);

  //small white ellipse that follows my mouse's position
  fill(255);
  ellipse(mouseX, mouseY, 5, 5);
  //A few system variables:
  //mouseX - gives us the value of the X coordinate of our mouse
  //mouseY - gives us the value of the Y coordinate of our mouse

  if (mouseIsPressed) {
    diameter = 100; //if the mouseIsPressed, diameter = 100
    fill(random(0, 255), random(0, 255), random(0, 255)); //fill is a random color
  } else {
    diameter = 50; //else the diameter = 50
    fill(255); //fill is white
  }

  //expressions - Computer's can do math! - (+, -, *, / )
  ellipse(beginning + (space * 0), 250, diameter, diameter);
  ellipse(beginning + (space * 1), 250, diameter, diameter);
  ellipse(beginning + (space * 2), 250, diameter, diameter);

}
