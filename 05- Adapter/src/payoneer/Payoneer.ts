import Token from "../utils/token";
import IPayoneerPayment from "./IPayoneerPayment";

export default class Payoneer implements IPayoneerPayment{
    payoneerPayment(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token);
        console.log("Enviando Pagamento via Payoneer");
    }
    payoneerReceive(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token);
        console.log("Recebendo pagamento via Payoneer");
    }
    token: Token;

    authToken(): Token {
        return new Token();
    }
   
}