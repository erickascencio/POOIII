import ITransportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/Interface/IAircraft";
import ILand from "../vehicles/land/interface/Iland";

export default class Client {
    private vehicle : ILand;
    private aircraft : IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(): void {
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}