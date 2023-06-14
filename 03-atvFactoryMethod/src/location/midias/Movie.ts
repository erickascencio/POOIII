import InterfaceItems from "./interface/InterfaceItems";


export default class Movie implements InterfaceItems{
    start(): void{
        this.getDescription(); //??
        console.log("Movie: Iniciando o filme!");
    }

    getDescription(): void{
        console.log("Movie: Filme Iniciado!");
    }
}