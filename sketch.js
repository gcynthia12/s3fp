let radio;

function setup() {
  //brush size selector
  form = createRadio();
  form.option('10', 'small');
  form.option('20', 'medium');
  form.option('30', 'large');
  form.style('width', '80px');
  form.style('position', 'absolute');
  form.style('top', '125px');
  form.selected('10');
  //new color button
  button1 = select('#button1');
  button1.mousePressed(newColor);
  //clear button
  button2 = select('#button2');
  button2.mousePressed(canvasTexture);
  //download button
  button3 = select('#button3');
  button3.mousePressed(saveDrawing);
  //canvas + canvas texture
  createCanvas(501, 501);
  canvasTexture();
  //new color for drawing
  newColor();
}

function draw() {
  noStroke();
  if (mouseIsPressed){
    size = form.value();
    fill(0,0,90);
    ellipse(mouseX+1, mouseY+1, size);
    c = color(randomHue, random(0, 100), random(0, 100));
    fill(c);
    ellipse(mouseX, mouseY, size);
  }    
}

function canvasTexture(){
  colorMode(RGB);
  background(255);
  stroke(230);
  strokeWeight(1);
  for (let i = 0; i <= 501; i = i + 3){
    line(i, 0, i, 500);
  }
  for (let i = 0; i <= 501; i = i + 3){
    line(0, i, 500, i);
  }
  colorMode(HSB);
}

function newColor(){
  randomHue = random(0, 360);
}

function saveDrawing() {
  save("canvas.png");
}