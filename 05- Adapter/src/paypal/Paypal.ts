import Token from "../utils/token";
import IPayPalPayment from "./IPayPalPayment";

export default class Paypal implements IPayPalPayment{
    token: Token;

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token);
        console.log("Enviando Pagamento via Paypal");
    }
    paypalReceive(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token);
        console.log("Recebendo pagamento via Paypal");
    }

}