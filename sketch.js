let imagemCenario;
let imagemPersonagem;
let cenario;
let somDojogo;

function preload(){
  imagemCenario = loadImage('./imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('./imagens/personagem/correndo.png');
  somDojogo = loadSound('./sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 2.5); 
  personagem = new Personagem(imagemPersonagem);
  //frameRate(40);
  //somDojogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  
}

