import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/Interface/IAircraft";
import Motorcycle from "../vehicles/land/Motorcycle";
import ILand from "../vehicles/land/interface/Iland";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class implements ITransportFactory{
    createTransportVehicle() : ILand {
        return new Motorcycle();
    }
    createTransportAircraft()  : IAircraft{
        return new Helicopter();
    }
}