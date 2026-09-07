function primeiroModo(){
    console.log("Olá!");
}
primeiroModo();
//
const segundoModo = function(texto){
    console.log(`Olá meu nome é ${texto}`);
}
segundoModo("Breno");
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