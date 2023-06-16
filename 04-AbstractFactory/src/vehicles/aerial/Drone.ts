import IAircraft from "./Interface/IAircraft";

export default class Drone implements IAircraft {
    checkWind(): void {
        console.log("Ventos a 25km/h, ventos ok.")
    }
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem do Drone");
    }
    getCargo(): void {
        console.log("Já pegamos a encomenda");
    }
}