import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/ICorreios";
import Transportadora from "./transportadora/Transportadora";

const entrega : ICorreios = new Correios();

entrega.sendCorreios();   
entrega.receiveCorreios();
console.log("--------------------------------------------------");
console.log("   ");
const entrega2: ICorreios = new TransportadoraAdapter(new Transportadora);
entrega2.sendCorreios();
entrega2.receiveCorreios();