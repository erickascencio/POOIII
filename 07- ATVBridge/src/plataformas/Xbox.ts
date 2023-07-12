import IPlatform from "./IPlatform";

export default class Xbox implements IPlatform {

    constructor() {
        this.configureGame();
        console.log("Xbox: Plataforma Configurada.");
    }

    configureGame(): void {
        this.authToken();
       console.log("Xbox: Configurando o jogo.");
    }
    authToken(): void {
        console.log("Xbox: Autenticando Token");
    }

}