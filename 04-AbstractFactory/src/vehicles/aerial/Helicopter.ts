import IAircraft from "./Interface/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo
        console.log("Iniciando a decolagem.");
    }
    getCargo(): void {
        console.log("Passageiros a bordo, voo autorizado.");
    }
    checkWind(): void {
        console.log("Ventos a 25km/h, ventos, Norte, Ok.")
    }

}