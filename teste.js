//Operadores e seus tipos
const variavel1 = 1;
const variavel2 = "Olá Mundo";
const variavel3 = true;
const variavel4 = 2.5;
const variavel5 = undefined;
const variavel6 = null;

console.log(`${variavel1}, ${variavel2}, ${variavel3}, ${variavel4}, ${variavel5}, ${variavel6}`);

console.log(typeof(variavel1));
console.log(typeof(variavel2));
console.log(typeof(variavel3));
console.log(typeof(variavel4));
console.log(typeof(variavel5));
console.log(typeof(variavel6));

//Booleanos
const teste = 5 > 2;
console.log(teste);

const teste2 = 10 < 5 && 2 < 3;
const teste3 = 10 < 5 || 2 < 3;
const teste4 = "5" === 5 && 2 < 3;
console.log(teste2);
console.log(teste3);
console.log(teste4);
//

// const recebe = prompt("Digite seu nome");
//console.log(`Olá ${recebe},seja-bem vindo!`);

console.error("Sinalizando Erro!");
console.warn("Sinalizando aviso aqui");

//Estruturas de Controle e Repetição

//IF e IF e Else

if(false){

}else if(false){

}else if(true){
    console.log("Esta condição é verdadeira");
}

if(5 > 1){
    console.log("5 é maior 1");
}

if(5 < 1){
    console.log("5 é menor que 1");
}else{
    console.log("5 não é menor que 1");
}

if( 5 > 10){
    console.log(".");
}else if(5 < 10){
    console.log("5 é menor que 10");
}

//Loops

// While

let p = 0;

while (p < 5){
    p = p + 1;
    console.log(`${p}`);
}

//For

for(let i = 0; i < 10; i++){
   console.log(`Loop ${i}`);
}

for(let x = 10; x >= 1; x--){
    console.log(`${x}`);
}

//
for(i = 1; i <= 10; i++){
    if(i %2 == 0){
        console.log(`${i} é numero par`);
    }else if(i % 2 ==! 0){
        console.log(`${i} este numero é impar`)
    }
}

//

for(let i = 0; i < 100; i++){
    if(i === 5){
        console.log(`For foi parado no ${i}`);
        break;
    }
}

// Switchs
const profissao = "Programador";

switch (profissao){
    case "Programador":
    console.log("Você é Programador");
    break;
    case "Advogado":
    console.log("Você é Advogado");
    break;
    default:
        console.log("Profissão não encontrada")
}

let idade = 18;

switch (true){
    case idade >= 18:
        console.log("Você é Maior de idade");
        break;
            default:
                console.log("Você é menor de idade");
}

const estadoCivil = "Namorando";

switch (estadoCivil){
    case "Solteiro(a)":
        console.log("Estado Civil do Paciente é Solteiro(a)");
        break;
         case "Casado(a)":
        console.log("Estado Civil do Paciente é Casado(a)");
        break;
         case "Viuvo(a)":
        console.log("Estado Civil do Paciente é Viuvo(a)");
        break;
        default:
            console.log("Estado Civil inválido!")
}

//Functions
function primeiroModo(){
    console.log("Olá!");
}
primeiroModo();
//
const segundoModo = function(texto){
    console.log(`Olá meu nome é ${texto}`);
}
segundoModo("Breno Costa");
//
const terceiroModoArrow = (x) =>{
console.log(`a definição dessa função se chama ${x}`);
}
terceiroModoArrow("Arrow Function");
//
const A = 10;
const B = 20;
const C = 30;
const D = 40;

function soma(a,b){
    const adicao = a + b;
    console.log(`${a} + ${b} = ${adicao}`);
}
soma(A,B);
soma(D,C);
soma(A,C);
soma(D,B);
//
function calculos(a,b){
    const adicao = a + b;
    console.log(`${a} + ${b} = ${adicao}`);

    const subtracao = a - b;
    console.log(`${a} - ${b} = ${subtracao}`);

    const multiplicacao = a * b;
    console.log(`${a} x ${b} = ${multiplicacao}`);

    const divicao = a / b;
    console.log(`${a} / ${b} = ${divicao}`);
}
calculos(5,5);
//
const parImpa = (n) =>{
    if(n % 2 === 0){
        console.log(`${n} é numero Par`);
    }else{
        console.log(`${n} é numero Impar`);
    }
}
parImpa(5);
parImpa(10);
//
const mediaEscolar = (a,b,c,d) =>{
    const result = (a + b + c + d)/4;
    if( result > 7){
        console.log(`Aluno Aprovado com a media de ${result}`);
    }else{
        console.log(`Aluno Reprovado com a media de ${result}`);
    }
}
mediaEscolar(7,6,10,7);
//
const acess = (nome,tokkens = 5) =>{
    console.log("Você recebeu 5 tokkens gratis");
    for( let x = 0; x < tokkens; x++){
        console.log(`${nome} você ainda tem ${tokkens} restantes`);
    }
}
acess("Breno");
acess("João",10);
//
function first(){
    const variavel = 10;
    function second(){
        console.log(variavel + 10);
    }
    second();
}
first();

const multiplicacao = (x) =>{
    return (y) =>{
        return x * y;
    }
}
const valorDeX = multiplicacao(5);

console.log(valorDeX(5));
// 
const tabuada = (A = 10) =>{
    for( let y = 1; y <= A; y++){

    for(let x = 1; x <= A; x++){
        result = x * A;
        console.log(`${y} x ${x} = ${result}`);
    }
}
}
tabuada();
//
const loopSemLoop = (n,m) =>{
    if(n < 10){
        console.log("Função Parou");
    }else{
        const x = n - m;
        console.log(x);
        loopSemLoop(x,m);
    }
}
loopSemLoop(100,5);
//
function fatorial(x){
    if(x === 0){
        return 1;
    }else{
        return x * fatorial(x -1);
    }
}
console.log(fatorial(4));
//
function baskara(a,b,c){
    const delta = b ** 2 - 4 * a * c ;
    const raiz = Math.sqrt(delta);
    const x1 = (-b + raiz) / (2 * a);
    const x2 = (-b - raiz) / (2 * a);
    console.log(`A raiz quadrada de ${delta} é ${raiz}`);
    console.log(`X1 e X2 são respectivamente ${x1} e ${x2}`);
}
baskara(1,12,-13);
baskara(2,12,-14);
