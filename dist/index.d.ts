import 'dotenv/config';
export * from './runtime';
import { PaymentGatewayApi } from './payment_gateway/v1';
export { PaymentGatewayApi } from './payment_gateway/v1';
import { IPGApi } from './ipg/v1';
export { IPGApi } from './ipg/v1';
export interface DanaOpts {
    partnerId?: string;
    privateKey?: string;
    origin?: string;
    env?: string;
}
export declare class Dana {
    opts: DanaOpts;
    paymentGatewayApi: PaymentGatewayApi;
    ipgApi: IPGApi;
    constructor({ partnerId, privateKey, origin, env }?: DanaOpts);
}
export default Dana;
