import PayoneerAdpater from "./adapters/PayoneerAdapter";
import IPayoneerPayment from "./payoneer/IPayoneerPayment";
import Payoneer from "./payoneer/Payoneer";
import IPayPalPayment from "./paypal/IPayPalPayment";
import Paypal from "./paypal/Paypal";

const payment: IPayPalPayment = new Paypal();

payment.paypalPayment();   
payment.paypalReceive();
console.log("--------------------------------------------------");
console.log("   ");
const payment2: IPayPalPayment = new PayoneerAdpater(new Payoneer);
payment2.paypalPayment();
payment2.paypalReceive();