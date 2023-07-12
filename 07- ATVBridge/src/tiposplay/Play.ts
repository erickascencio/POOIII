import IPlatform from "../plataformas/IPlatform";
import IPlays from "./Iplays";

export default class Play implements IPlays {
    constructor(private platform : IPlatform){}

    playing(): void {
        console.log("Iniciando o Jogo");
    }
    result(): void {
        console.log(" **** Jogando ****");
    }

}