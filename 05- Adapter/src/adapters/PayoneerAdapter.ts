import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/token";

export default class PayoneerAdpater implements IPayPalPayment {
    constructor (private payoneer: Payoneer) {
        console.log("Adaptando Payoneer no Paypal")
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.payoneer.payoneerPayment();
    }
    paypalReceive(): void {
        return this.payoneer.payoneerReceive();
    }

}