export default class Sauces {
    constructor(private _tipotemp: string){}

    get tipotemp(): string {
        return this._tipotemp;
    }

    set tipotemp(tipotemp: string) {
        this._tipotemp = tipotemp;
    }
}