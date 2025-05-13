export * from './runtime';
import 'dotenv/config';
import { PaymentGatewayApi } from './payment_gateway/v1';
export { PaymentGatewayApi } from './payment_gateway/v1';
export interface DanaOpts {
    partnerId: string;
    privateKey: string;
    env: string;
}
export declare class Dana {
    opts: DanaOpts;
    paymentGatewayApi: PaymentGatewayApi;
    constructor({ partnerId, privateKey, env }?: {
        partnerId?: string;
        privateKey?: string;
        env?: string;
    });
}
export default Dana;
