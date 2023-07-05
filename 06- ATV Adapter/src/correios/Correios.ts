import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    sendCorreios() {
        console.log("Enviando entrega via Correios!");
    }

    receiveCorreios() {
        console.log("Recebendo entrega via Correios!");
    }
}