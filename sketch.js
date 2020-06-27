function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  //somDojogo.loop();
  jogo = new Jogo();
  jogo.setup();
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() { 
  jogo.draw();  
}

