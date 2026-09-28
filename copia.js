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
//
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
