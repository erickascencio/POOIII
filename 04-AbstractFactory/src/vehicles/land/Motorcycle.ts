import ILand from "./interface/Iland";

export default class Motorcycle implements ILand {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a entrega.");
    }
    getCargo(): void {
        console.log("Pegamos a encomenda, estamos prontos.");
    }
}