var videogames = ['Switch', 'PS4', 'XBOX'];

videogames.pop(); // Remove o ultimo item da array.
videogames.push('3DS'); // Insere um item na array.

for (var numero = 1; numero <= 10; numero++) { // um loop com for.
 // console.log(numero);
}

var videogame = ['Switch', 'PS4', 'XBOX', '3DS'];

for (var item = 0; item < videogame.length; item++) {
  //console.log(videogame[item]);
}

// Neste for acima eu passei todos os itens que estiverem dentro da array em um loop.

var games = ['Switch', 'PS4', 'XBOX', '3DS'];
for (var i = 0; i < games.length; i++) {
 // console.log(games[i]);
  if(games[i] === 'XBOX') {
    break;
  }
}

// um forEach é um método que executa uma função para cada item da Array. 
// É uma forma mais simples de utilizarmos um loop
// com arrays (ou array-like)

var videoGames = ['Switch', 'PS4', '3DS', 'XBOX'];
videoGames.forEach((item) => {
  console.log(item);
});

// O argumento item será utilizado dinâmicamente.
// Podemos passar os seguintes parâmetros item, index e array.

var frutas = ['Maçã', 'Pêra', 'Abacaxi', 'Morango'];
frutas.forEach((fruta, index) => {
  console.log(fruta, index);
});

// Exercícios para reforçar o aprendizado, caso
// você queira aprender mais é aconselhavel que
// você refaça.

// Exercício número 1
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002.

var brasilCampeao = ['1959', '1962', '1970', '1994', '2002'];
brasilCampeao.forEach((i) => {
  console.log(i);
});

// Exercício número 2
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, O Brasil ganhou a copa de
// ${ano}

var brasilCampeao = ['1959', '1962', '1970', '1994', '2002'];
brasilCampeao.forEach((i) => {
  console.log(`O Brasil ganhou a copa de ${i}.`);
});


// Exercício número 3
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pêra.

let saladaFruta = ['Banana', 'Maçã', 'Pêra', 'Abacaxi', 'Uva'];
for (var fruta = 0; fruta < saladaFruta.length; fruta++) {
  console.log(saladaFruta[fruta]);

  if(saladaFruta[fruta] === 'Pêra') {
    break;
  }
}

// .length traz a quantidade de conteúdos na array.

var UltimaFruta = saladaFruta[saladaFruta.length -1]; // Aqui eu estou trazendo a última fruta do
// array o -1 é pelo motivo que a array começa
// contando do 0 logo se existem 28 itens o 27
// será o último partindo do 0.
