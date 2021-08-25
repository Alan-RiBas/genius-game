//principais váriaveis ======

let order = [];
let clickedOrder = [];
let score = 0;

const green = document.querySelector('.green');  //0 - verde
const red = document.querySelector('.red');      //1 - vermelho
const yellow = document.querySelector('.yellow');//2 - amarelo
const blue = document.querySelector('.blue');    //3 - azul

//principais váriaveis =======

//Cria ordem aleatoria das cores
let shuffleOrder = () =>{ // Inicio da função para acender as cores
  let colorOrder = Math.floor(Math.random * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  
    for(let i in order) {// Função para cada i vai acender uma luz
      let elementColor = createColorElement(order[i]);
      lightColor(elementColor, Number(i) + 1 );
    }
  
}// Fim da função Cria ordem aleatoria das cores


let lightColor = (element, number) =>{//Acende a próxima cor
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(()=>{
    element.classList.remove('selected');
  })
}//Fim da função Acende a próxima cor


let checkOrder = () => {//Funcão que verifica se o usuário fez a mesma ordem de cor "setada" pelo jogo.
  for(let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      gameOver();
      break;
    }
  }
  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}//Fim da Funcão que verifica se o usuário fez a mesma ordem de cor "setada" pelo jogo.


let click = (color) =>{
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');
  
  setTimeout(()=>{
    createColorElement(color).classList.remove('selected');
    checkOrder();//Esta função foi chamada para verificar se o Click foi na order correta
  },250) 
}//Fim da Função para CLICK do usuário

let createColorElement = (color) =>{//Função que retorna um valor para cada cor
  if(color == 0){
    return green;
  }else if(color == 1){
    return red;
  }else if(color == 2){
    return yellow;
  }else if(color == 3){
    return blue;
  }      
}//Fim da Função que retorna um valor para cada cor

let nextLevel = () =>{//Função para próximo Nível
  score++;//esta almentando o valor da variavel
  shuffleOrder();//chamando a função para criar uma nova orderm de cores
  
}//Fim da Função para próximo Nível

let gameOver = () =>{//Função Game Over
  alert(`Pontuação: ${score}\n Você perdeu o jogo!\n Clique em ok para jogar iniciar um novo jogo`);
  order = [];
  clickedOrder = [];
  
  playGame();
}// Fim da Função Game Over

let playGame = () =>{//Função Inicia o jogo
  alert('Bem-vindo ao Gênesis! Iniciando novo jogo')
  score = 0;
  
  nextLevel();
}//Fim da Função Inicia o jogo


//Evento de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame();//inicio do jogo
