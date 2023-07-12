import IPlatform from "./IPlatform";

export default class Playstation implements IPlatform {

    constructor() {
        this.configureGame();
        console.log("Playstation: Plataforma Configurada.");
    }

    configureGame(): void {
        this.authToken
       console.log("Playstation: Configurando o jogo.");
    }
    authToken(): void {
        console.log("Playstation: Autenticando Token");
    }

}