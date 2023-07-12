import IPlatform from "../plataformas/IPlatform";
import Play from "./Play";

export default class AdvancedPlay extends Play {
    constructor(platform : IPlatform){
        super(platform);
    }

    chalenge(): void {
        console.log(" Desafio Iniciado");
    }

}