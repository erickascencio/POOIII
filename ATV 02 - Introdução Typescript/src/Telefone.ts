export default class Telefone {
    private _ddd : number;
    private _numero : number;
    private _tipo : string;

    constructor(ddd: number, numero: number, tipo: string) {
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }

    public get ddd() : number {
        return this._ddd;
    }

    public set ddd(ddd : number) {
        this._ddd = ddd;
    }

    public get numero() : number { 
        return this._numero;
    }

    public set numero(numero : number) {
        this._numero = numero;
    }

    public get tipo() : string {
        return this._tipo;
    }

    public set tipo(tipo : string) {
        this._tipo = tipo;
    }
}