import Token from "../utils/token";

export default interface IPayoneerPayment {
    authToken() : Token;
    payoneerPayment() : void;
    payoneerReceive() : void;
}