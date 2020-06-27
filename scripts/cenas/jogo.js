class Jogo{
    constuctor(){
        this.inimigoAtual = 0;        
    }

    setup(){
        cenario = new Cenario(imagemCenario, 2.5); 
        pontuacao = new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
            
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52 , 30, 52, 52, 104, 104, 10, 200);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52 , 200, 100, 75, 200, 150, 10, 200);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2 , 0, 200, 200, 400, 400, 15, 200);
            
        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }
}