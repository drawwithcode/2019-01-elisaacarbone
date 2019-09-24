

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  angleMode(DEGREES);

  frameRate(60);
}

function draw() {

  translate(width/2,height/2)
  stroke(
    lerpColor(
      color (249, 57, 67),
      color (126, 178, 221),
      frameCount/480
    )
  );

  if (frameCount <=120) {
    push();
    translate(-100,0);
    line(100, 0, 100*sin(frameCount*3 + 90), 100*cos(frameCount*3 + 90));
    pop();
  }
  else {if (frameCount <= 240){
      push();
      translate(0,100);
      line(0, -100, 100*sin(frameCount*3 + 180), 100*cos(frameCount*3 + 180));
      pop();}
      else {if(frameCount <= 360){
            translate(100,0);
            line(-100, 0, 100*sin(frameCount*3 - 90), 100*cos(frameCount*3 - 90));
          }
        else {
          translate(0, -100);
          line(0, 100, 100*sin(frameCount*3), 100*cos(frameCount*3));}
        }
  }

  if (frameCount >= 480){
    background(30);
    frameCount = -1;}
}
