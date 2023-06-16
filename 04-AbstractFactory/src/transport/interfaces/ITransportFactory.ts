import IAircraft from "../../vehicles/aerial/Interface/IAircraft";
import ILand from "../../vehicles/land/interface/Iland";

export default interface ITransportFactory {
    createTransportVehicle(): ILand;
    createTransportAircraft(): IAircraft;
}