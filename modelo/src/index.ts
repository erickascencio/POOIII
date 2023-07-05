import Pessoa from "./Pessoa";

let aluno1 : Pessoa = new Pessoa("João", "Silva", 1990);
aluno1.nome = "Marcos";
aluno1.sobrenome = "Santos";
console.log(aluno1.nomeCompleto());