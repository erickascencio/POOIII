import ILand from "./interface/Iland";

export default class Scooter implements ILand {
    startRoute() {
        this.getCargo();
        console.log("Iniciando a viagem.");
    }
    getCargo() {
        console.log("Passageiro embrcado!");
    }
}