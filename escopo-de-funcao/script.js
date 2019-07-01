// Escopo de função
// Variáveis declaradas dentro de funções não são
// acessadas fora das mesmas, veja o exemplo.

function mostrarFruta(){ 
  var fruta = 'morango';
  console.log(fruta); // Retorna morango.
}

// Criamos uma função
// com o nome mostrarFruta e abrimos o escopo da
// função com chaves e dentro dela definimos uma
// variável com o nome fruta e dentro dela
// salvamos a fruta desejada.
// Após definir a variável e o que iria conter
// nela, passei um console para que o navegador
// retorne o valor que contem na variável que no
// caso é o morango.

mostrarFruta(); // Aqui retornará Morango
// que é o que definimos dentro do escopo
// da nossa função.
console.log(fruta); // Aqui retornara um erro
// fruta is not defined, mas por que?
// se eu defini lá em cima? ai que vem
// a qualidade do escopo, ele evita o conflito
// entre nomes dentro do arquivo geral.

// Após você entender de escopo, vamos voltar a
// falar de variáveis, pois condiz com o que
// estamos falando, existem as variáveis globais
// elas são declaradas sem a palavra chave
// var, let ou const e isso cria um variável
// que pode ser acessada em qualquer escopo,
// ou seja, ela é global. Isso é um erro
// então, não faça isso, não é uma boa prática
// de programação.
// Vejamos um exemplo dessa prática
function mostrarCarro() {
  carro = 'Fusquinha'; // Variável carro com o
// fusquinha atribuído.
  console.log(carro); // retornando no navegador
// o que contém na variável carro.
}

mostrarCarro(); // Retornamos a função mostrarCarro
  console.log(carro); // E aqui diferente do escopo
// mostrarFruta é que conseguimos acessar o que
// contém dentro do escopo da função, sendo assim
// poderia arrumar algum problema se você criasse
// outra variável com o mesmo nome e atribuisse
// outro valor a ela e assim poderia quebrar
// todo seu código/programa/algorítmo.

// Voltando a falar de escopo de função, temos o
// escopo de função (PAI) ou seja, variáveis
// declaradas no escopo pai da função, conseguem
// ser acessadas pelas funções, vamos ao exemplo?
var carroLuxo = 'Mercedez'; // Função do escopo
// Pai.

function mostraCarroDeLuxo() {
  var frase = `Meu carr é um ${carroLuxo} de luxo.`;
  // Acima temos uma template string que é atribuida
  // com a crase e nela você consegue puxar uma
  // variável utilizando o ${nomeDaVariavel}.
  console.log(frase);
}

mostraCarroDeLuxo(); // Retornamos a função mostra
// carroDeLuxo.
console.log(carroLuxo); // Retornamos o que contém
// dentro da variável carroLuxo pois ela está fora
// do escopo da função.

// Agora nós vamos ao Escopo de Bloco
// Variáveis criadas com var, vazam do bloco. Por
// isso com a introdução do ES6 a melhor forma de
// declararmos uma variável é utilizando const ou
// let, pois estas respeitam o escopo do bloco.
// Vamos a um exemplo.

if(true) {
   var mes = 'Julho'; // Define a variável mes
   // e atribui Julho a variável.
   console.log(mes); // Retorna no console o
   // valor atribuido a variável.
}

console.log(mes); // E aqui fora do escopo de
// bloco você consegue ainda, retornar a
// variável, lembrando que ela está fora de
// uma função e dentro de um escopo de bloco
// de uma condicional ou seja, if, else, else
// if.

// Portanto não queremos que a variável escape
// do nosso bloco, isso foi um erro da linguagem
// então no ES6, eles resolveram esse erro
// eles criaram as duas novas formas de
// criar uma variável a const e let
// Essas respeitam o escopo de bloco, vamos fazer
// novamente um exemplo utilizando o let.

if(true) {
  let ano = 2019;
  console.log(ano);
}

console.log(ano); // Retornará um erro, pois
// ele se encontra fora do escopo.


// Var vaza o bloco
// mesmo com a condição falsa, a variável 
// ainda será declarada utilizando o 
// hoisting e o valor ficara undefined.

// Vamos ao exemplo?
if(false) {
  var arroz = 'Arroz Branco';
  console.log(arroz); // Retorna Arroz Branco.
}

console.log(arroz); // Retonará undefined.
// Undefined que dizer que a variável ainda
// não foi definida ou seja, sem valor
// atribuído, porém foi criada.
// Diferente de se ela não fosse criada, pois
// Retornaria um error de syntax.

// Provavelmente você já deve ter passado pela
// documentação de variáveis e a partir de agora
// peço que você só declare variáveis utilizando
// o const ou o let.

// Utilizei muito as variáveis var antes para que
// você conseguisse entender bem o que era uma
// variável e não ficar pensando em let e etc.

// Lembrando a vocês que {} abrir e fechar chaves
// cria um bloco diferente de = {} que cria objetos

// For loop utilizando var 
// Ao utilizar var dentro de um for loop, que é um
// bloco, o valor variável utilizada irá vazar e
// existir fora do loop.

var i = 50;

for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
} 

console.log(i); // 10;

// mesmo se eu tivesse a variável definida antes
// do for ela não iria ter o mesmo valor atribuído
// após o for, pois ela seria reescrita no for.
// E geralmente nós não queremos que isso aconteça.
// Após esse acontecimento lhe digo que passe a usar
// a variável let, que não vaza do escopo.

for(let x = 0; x < 10; x++) {
  console.log(`Número ${x}`);
}

// Agora irémos falar sobre a diferença entre o conts
// e o let.

// const: mantém o escopo no bloco, impede a redeclaração
// e impede a modificação do valor da variável, evitando
// assim bugs no código.
// Vamos aos exemplos
const mesDoAno = 'Dezembro';
mesDoAno = 'Janeiro'; // Retornará um erro, pois você
// tentou modificar o valor e ele não pode ser redeclarado.
const semana; // Erro, você não declarou um valor.

const data = { // Aqui nós criamos um objeto = {}.
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona pois você está inserindo um
// valor dentro do objeto data e não na variável data
// porém não podemos mudar o tipo do valor que nós criamos
// inicialmente, se for uma string ele terá que permanecer
// como uma string, se for number terá que permanecer como
// number e se for booleano terá que permanecer como
// booleano, ok?
data = 'Janeiro'; // erro este erro diz que você não pode
// atribuir a uma variável existente.
const data = 1; // Aqui dará um erro de syntax, pois você
// está tentando criar uma variável que já é existente.

// Também podemos inserir mais uma propriedade no objeto
// data.
data.semana = 28;

// Agora vamos falar sobre o Let, ele mantém o escopo no
// bloco, impede a redeclaração, mas permite a modificação
// do valor da variável.
let numero;
numero = 2;
numero++;
console.log(numero); // 3

let numero = 4; // Erro, redeclarou a variável.

// Em nossas documentações eu geralmente utilizarei o 
// const.

// Agora a baixo deixarei o exercício para você praticar
// E após o exercício deixarei o código correto.

// Exercício 01

// Por qual motivo o código abaixo retorna com erros?
{
var cor = 'preto';
const marca = 'BMW';
let portas = 4;
}

console.log(var, marca, portas);

// Exercício 02

// Como corrigir o erro abaixo?
function somarTres(x) {
  const tres = 3;
  return x + tres;
}

function dividirTres(x) {
  return x + tres;
}

somarTres(4);
dividirTres(6);

// Exercício 03

// O que fazer para total retornar 500

var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);


// Correção do exercício 01
/* {
  var cor = 'preto';
  const marca = 'BMW';
  let portas = 4;
  }
  
  console.log(cor);

  // var é a definição que é uma variável
  // e nós só chamamos uma variável pelo nome
  // que demos a esta variável e como eu falei
  // anteriormente o const e o let não podem ser
  // chamados fora do escopo, nem atribuir valores
  // a eles.
*/

// Correção do exercício 02
/*
  const tres = 3;

function somarTres(x) {
  return x + tres;
}

function dividirTres(x) {
  return x + tres;
}

console.log(somarTres(12));
console.log(dividirTres(6));

// A const dentro do escopo não seria vista fora
// dele então para resolvermos este problema
// retiramos ela de dentro do escopo e colocamos
// ela do lado de fora dele, assim nós conseguimos
// usa-la no escopo e fora dele também.

// Correção do exercício 03
/*
const numero = 50;

for(let numero = 0; numero < 10; numero ++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// Explicando essa correção eu fiz o seguinte
// coloquei como uma constante o numero 50 e sendo
// assim ela não irá trocar seu valor mais e dentro
// do for eu coloquei como let, assim ela não influencia
// fora do escopo dela e logo após isso conseguimos retornar
// o valor de 500.

// O numero foi redeclarado dentro de let, porém como ele
// está dentro do bloco ele não conflita com o que foi 
// declarado dentro do escopo, pois saindo do escopo ele
// esquece o que foi escrito lá dentro.
*/
