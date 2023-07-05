import ICorreios from "../correios/ICorreios";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreios{

    constructor (private transportadora : Transportadora) {
        console.log("Adaptando Transportdora no Correios");
    }

    sendCorreios() {
        return this.transportadora.send();
    }
    receiveCorreios() {
        return this.transportadora.receive();
    }

}