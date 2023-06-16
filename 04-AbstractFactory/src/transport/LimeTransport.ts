import Drone from "../vehicles/aerial/Drone";
import Scooter from "../vehicles/land/Scooter";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class implements ITransportFactory {
    createTransportVehicle() {
        return new Scooter();
    }
    createTransportAircraft() {
        return new Drone();
    }
}