function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  //somDojogo.loop();
  jogo = new Jogo();
  jogo.setup();
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula();
    //somDoPulo.play();    
  } 
}

function draw() { 
  cenario.exibe();
  cenario.move();   

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();  

  const inimigo = inimigos[inimigoAtual];  
  const inimigoVisivel =  inimigo.x < -inimigo.largura;
    
  inimigo.exibe();
  inimigo.move();

  console.log(inimigoVisivel);
  if (inimigoVisivel){
    inimigoAtual++;       
    if(inimigoAtual > 2){
      inimigoAtual = parseInt(random(0,2));;
    }
    inimigo.velocidade = parseInt(random(10,25));
  }

  if(personagem.estaColidindo(inimigo)){      
    image(imagemGameOver, width / 2 - 200, height / 3)
    noLoop();
  }
  
  
}

