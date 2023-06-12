import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente {
private _nome: string;
private _cpf : number;
private _dataNascimento: number;
private _sexo : string;
private _endereco : Endereco;
private _telefones : Telefone[];

constructor(nome: string, cpf: number, dataNascimento: number, sexo: string, endereco: Endereco, telefones: Telefone[]) { 
    this._nome = nome;
    this._cpf = cpf;
    this._dataNascimento = dataNascimento;
    this._sexo = sexo;
    this._endereco = endereco;
    this._telefones = telefones;
    }

    public get nome() : string {
        return this._nome;
    }
    
    public set nome(nome : string) {
        this._nome = nome;
    }

    public get cpf() : number {
        return this._cpf;
    }

    public set cpf(cpf : number) {
        this._cpf = cpf;
    }

    public get dataNascimento() : number {
        return this._dataNascimento;
    }

    public set dataNascimento(dataNascimento : number) {
        this._dataNascimento = dataNascimento;
    }

    public get sexo() : string {
        return this._sexo;
    }

    public set sexo(sexo : string) {
        this._sexo = sexo;
    }

    public get endereco() : Endereco {
        return this._endereco;
    }

    public set endereco(endereco : Endereco) {
        this._endereco = endereco;
    }

    public get telefones() : Telefone[] {
        return this._telefones;
    }

    public set telefones(telefones : Telefone[]) {
        this._telefones = telefones;
    }
}