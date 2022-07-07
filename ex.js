//variaveis

//string - texto
var nome = "luana123";

console.log(nome);
console.log("meu nome é " + nome);

//num
var idade1 = 10;
var idade2 = "10";

console.log(idade1);

//boolean
var bool = false;

console.log(bool);

//undefined
var x;

console.log(x);

//nulo - vazio
x = null;

console.log(x);

//matrix - array
var notas = [4, 10, 50, 40, 3];

console.log(notas);


//objeto
var aluno = {
    nome: "luana",
    idade: 10,
    sala: 07,
    materia: "lpoo",
    nota: "i"
}

console.log(aluno);


//função
function verificar(idade) {

    if (idade > 18) {
        console.log("pode tirar carta");
    }
    else {
        console.log("n pode tirar carta");
    }
}

verificar(10);

//condicional if/else e op. logicos || && !
function verificar2(idade, money) {

    if (idade > 18 || money > 1000) {
        console.log("pode tirar carta");
    }
    else {
        console.log("n pode tirar carta");
    }
}

verificar2(12, 200);


//not !
function verificar3(idade, money) {

    if (!(idade > 18)) {
        console.log("pode tirar carta");
    }
    else {
        console.log("n pode tirar carta");
    }
}

verificar3(16);

//for(loop)
for (var i = 0; i <= 10; i += 2) {
    console.log(i);
    console.log("teste");
}

//switch(troca)

var sensor;

switch (sensor) {
    case "preto": console.log("vire a esquerda");
        break;
    case "vermelho": console.log("vire a direita");
        break;
    case "amarelo": console.log("va em frente");
        break;
    default: console.log("pulando");
}
