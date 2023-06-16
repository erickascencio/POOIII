import Airplane from "../vehicles/aerial/Airplane";
import Car from "../vehicles/land/Car";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory {
    createTransportVehicle() {
        return new Car();
    }
    createTransportAircraft() {
        return new Airplane();
    }
}