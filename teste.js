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

function somainfinita(...abc){
    let total = 0;
    for(let i = 0; i < abc.length; i++){
        total += abc[i];
    }
    return total;
}
console.log(somainfinita(10,30,30));

const somainfinita2 = (... abc) => {
    let total =  0;
    for(num of abc){
        total += num;
    }
    return total;
}
console.log(somainfinita2(50,24,12));

//Arrays

const lista = [1,2,3,4,5];

console.log(lista);
console.log(lista[0]);
console.log(typeof(lista));
console.log(lista.length);

lista.push("6","7");
console.log(lista);

lista.pop();
console.log(lista);

const removidoPop = lista.pop();
console.log(lista);
console.log(removidoPop);

lista.shift();
console.log(lista);

const removidoShift = lista.shift();
console.log(lista);
console.log(removidoShift);

lista.unshift(-1,0,1,1,2);
console.log(lista);

console.log(lista.indexOf(1));
console.log(lista.lastIndexOf(1));
console.log(lista.indexOf(10));

const lista2 = lista.slice(3,5 + 1);
console.log(lista);
console.log(lista2);

lista.forEach(function(numero) {
    console.log(`Analisando o numero; ${numero}`);
});

console.log(lista.includes(0));
console.log(lista.includes(10));

lista.reverse();
console.log(lista);

const um = ["Matheus","Antonio"];
const dois = ["Bruno","Célia"];

const tres = um.concat(dois);

console.log(tres);

const loop = ["a","b","c","d","e","f","g","h","i","j"];

for(let i = 0; i < loop.length; i++){
    console.log(`Verificando elemento ${loop[i]}`);
}

const frutas = ["Maçâ","Uva","Manga","Perâ","Morango","Amora","Limão"];

for(let i = 0; i < frutas.length; i++){
    if( frutas[i] === "Morango"){
        console.log(`${frutas[i]} Encontrado!`);
        break;
    }else{
        console.log("Procurando...");
    }
}

//
let encontrado = false;

for(let i = 0; i < frutas.length; i++){
    if(frutas[i] === "Banana"){
        console.log(`${frutas[i]} Encontrado!!`);
        encontrado = true;
        break;
    }
console.log("Procurando.......");
}

if(encontrado === false){
    console.log("Não Encontrado!");
}
//

// Objetos
const aluno1 = {
    nome:"Alice",
    idade: 19,
    curso: "Fisioterapia"
}

console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.nome.length);

aluno1.situacao = "Aprovada";
console.log(aluno1);

delete aluno1.idade;
console.log(aluno1);

const umObj = {
    nome:"Mario",
    idade: 18
}

const doisObj = {
    profissao: "Programador",
    nivel: "Junior",
}
console.log(umObj);
console.log(doisObj);

Object.assign(umObj,doisObj);
console.log(umObj);

console.log(`Objeto doisObjt inalterado`);
console.log(doisObj);

console.log(Object.keys(umObj));
console.log(Object.entries(umObj));
//
const agent_17 = {
    name: "Alfred",
    age: 30,
    job: "Develop Backend",
    limguage: ["Java","Python","C++"]
}

console.log(agent_17);
console.log(Object.keys(agent_17));
console.log(Object.entries(agent_17));
//
const a = {
    nome: "Breno"
}
const b = a;

console.log(b);

b.idade = 23;
console.log(b);
console.log(a);

delete b.nome;
console.log(a);

const phone = " 99348593";
const addPhone = phone.padStart(11,"55");
console.log(addPhone);

const addEndPhone = phone.padEnd(10,"0");
console.log(addEndPhone);

const funcionarios = "Alex,Antonio,Maria,João,Aline";
const arrayFuncionarios = funcionarios.split(",");
console.log(arrayFuncionarios);

const stringJoin = " Funcionario ";
const novostring = arrayFuncionarios.join(stringJoin);
console.log(novostring);

console.log(stringJoin.repeat(4));

const myObj = {
    nome: "Breno",
    sobrenome: "Costa",
    prof: "Dev",
}
const {prof:myProf} = myObj;
console.log(myProf);

const myArray = ["1","2","3"];
const [veiculoA,veiculoB,veiculoC] = myArray;
console.log(veiculoA);
console.log(veiculoB);
console.log(veiculoC);


const myJSon = '{"nome": "Breno","age": 23, "skills": ["PHP","JS","Python"]}';

const myNewObjt = JSON.parse(myJSon);
console.log(myNewObjt);
console.log(myJSon);

const myNewJSon = JSON.stringify(myObj);
console.log(myNewJSon);

//POO
const animal = {
    nome: "Bob",
    latir: function(){
        console.log("AUAU!");
    },
};
console.log(animal);
console.log(animal.nome);
animal.latir();

animal.getnome = function(){
        return this.nome;
    };

console.log(animal.getnome());
console.log(animal);

animal.setnome = function(novonome){
    this.nome = novonome;
};

animal.setnome("Bravo");
console.log(animal.getnome());

//
const  text = "abc";
console.log(Object.getPrototypeOf(text));
 const protObj = {
    a: "b",
 }
 const protSecObj = Object.create(protObj);
 console.log(protSecObj);
 console.log(protSecObj.a);

 const cachoro = {
    raca: null,
 }

 const pastorAlemao = Object.create(cachoro);
 pastorAlemao.raca = "Pastor Alemão";
 console.log(pastorAlemao);

 cachoro.patas = 4;

 console.log(pastorAlemao.patas);

 //functions construtoras
 function criarCachorro(nome,raca){
    const cachoro = Object.create({});
    cachoro.nome = nome;
    cachoro.raca = raca;
    return cachoro;
 }
 const bob = criarCachorro("Bob","Puddler");
 console.log(bob);

 function animais(nome,patas){
    this.nome = nome;
    this.patas = patas;
 }
  animais.prototype.ruivar = function(){
    console.log("Auu");
 }
 const panda = new animais("panda",4);
 console.log(panda);
 panda.ruivar();

 //Classes
 class GatoClass{
    constructor(nome,raca){
        this.nome = nome;
        this.raca = raca;
    }
 }
 const pretin = new GatoClass("Pretin","Preto Puro");
 console.log(pretin);

 class Caminhao {
    constructor(eixos,cor){
        this.eixos = eixos;
        this.cor = cor;
    }
    descreverCaminhao(){
        console.log(`Este caminhão é da cor ${this.cor} e tem ${this.eixos} eixos`);
    }
 }
 const scania = new Caminhao(6, "Vermelho");
 console.log(scania);
 scania.descreverCaminhao();
 Caminhao.prototype.rodas = 4;

 class Pacientes {
    constructor(nome,doenca,gravidade){
        this.nome = nome;
        this.doenca = doenca
        this.gravidade = gravidade;
    }
}

const paciente01 = new Pacientes("Roberto","Pneumonia","10");
const paciente02 = new Pacientes("Anderson","Virose","9");
const paciente03 = new Pacientes("Alice","Febre","8");
const paciente04 = new Pacientes("Bruno","Febre","7");
const paciente05 = new Pacientes("Paulo","Tetano","6");
const paciente06 = new Pacientes("Mario","Dor de Cabeça","5");
const paciente07 = new Pacientes("Natalia","Escoriações","4");
const paciente08 = new Pacientes("Andressa","Queimadura","3");
const paciente09 = new Pacientes("Maria","Alergia","2");
const paciente10 = new Pacientes("Jayro","Desmaios","1");

console.log(paciente01);
console.log(paciente02);
console.log(paciente03);
console.log(paciente04);
console.log(paciente05);
console.log(paciente06);
console.log(paciente07);
console.log(paciente08);
console.log(paciente09);
console.log(paciente10);

Pacientes.prototype.grav = function(){
    if(this.gravidade >= 9){
        console.log("Gravissimo");
    }else if(this.gravidade > 5 && this.gravidade < 9 ){
        console.log("Grave");
    }else if(this.gravidade <= 5 && this.gravidade > 3){
        console.log("medio");
    }else{
        console.log("Baixa");
    }
}
paciente01.grav();
paciente02.grav();
paciente03.grav();
paciente04.grav();
paciente05.grav();
paciente06.grav();
paciente07.grav();
paciente08.grav();
paciente09.grav();
paciente10.grav();

console.clear();
class Humano {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}
const matheus = new Humano("Matheus",31);
console.log(matheus);

Humano.prototype.idade = "Não Definido";
console.log(Humano.prototype.idade);
console.log(matheus.idade);

//add metodos adiconais nas classes 
// pois não são como objetos
// que podemos adicionar facilmente ao objeto

class Aviao {
    constructor(marca,turbinas){
        this.marca = marca;
        this.turbinas = turbinas;
    }
}
const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boing = new Aviao("Boing",10);
console.log(boing)
console.log(boing[asas]);
console.log(boing[pilotos]);

class post {
    constructor(titulo,descricao,tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }
    get exibirtitulo(){
        return `Você esta lendo: ${this.titulo}`;
    }
    set adicionarTags(tags){
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}
const myPost = new post("Algum post","é uma limguage, etc....");
console.log(myPost);
console.log(myPost.exibirtitulo);
console.log(myPost.descricao);

myPost.adicionarTags  = "Programação, JavaScript, Python, I.A,"
console.log(myPost);

class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero  {
    constructor(patas,alimentacao){
        super (patas,alimentacao);
        this.alimentacao = alimentacao;
    }
}

const lobo1 = new Lobo(4,"Carnivoro");
console.log(lobo1);
// verifica herança
console.log(lobo1 instanceof Lobo);
console.log(Lobo instanceof Mamifero);
