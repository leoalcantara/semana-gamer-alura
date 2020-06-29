class Jogo{
    constructor(){
        this.inimigoAtual = 0;        
    }

    setup(){
        cenario = new Cenario(imagemCenario, 2.5); 
        pontuacao = new Pontuacao();
        vida = new Vida(3, 3);

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52 , 30, 52, 52, 104, 104, 10, 200);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52 , 200, 100, 75, 200, 150, 10, 200);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2 , 0, 200, 200, 400, 400, 15, 200);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed(){
        if(key === 'ArrowUp'){
            personagem.pula();
            //somDoPulo.play();    
          }
    }

    draw(){
        cenario.exibe();
        cenario.move();   
          
        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionarPonto();
          
        personagem.exibe();
        personagem.aplicaGravidade();  

                  
        const inimigo = inimigos[this.inimigoAtual];  
        const inimigoVisivel =  inimigo.x < -inimigo.largura;
          
        inimigo.exibe();
        inimigo.move();
          
        console.log(inimigoVisivel);
        if (inimigoVisivel){
          this.inimigoAtual++;       
          if(this.inimigoAtual > 2){
            this.inimigoAtual = parseInt(random(0,2));;
          }
          inimigo.velocidade = parseInt(random(10,25));
        }
      
        if(personagem.estaColidindo(inimigo)){      
          image(imagemGameOver, width / 2 - 200, height / 3)
          noLoop();
        }
    }
}