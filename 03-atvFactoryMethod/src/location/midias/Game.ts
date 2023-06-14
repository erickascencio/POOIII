import InterfaceItems from "./interface/InterfaceItems";


export default class Game implements InterfaceItems{
    start(): void{
        this.getDescription();
        console.log("Game: Iniciando o jogo!");
    }

    getDescription(): void{
        console.log("Game: Jogo Iniciado!");
    }
}