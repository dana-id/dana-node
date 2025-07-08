import 'dotenv/config';
export * from './runtime';
import { PaymentGatewayApi } from './payment_gateway/v1';
export { PaymentGatewayApi } from './payment_gateway/v1';
import { WidgetApi } from './widget/v1';
export { WidgetApi } from './widget/v1';
import { DisbursementApi } from './disbursement/v1';
export { DisbursementApi } from './disbursement/v1';
export interface DanaOpts {
    partnerId?: string;
    privateKey?: string;
    origin?: string;
    env?: string;
}
export declare class Dana {
    opts: DanaOpts;
    paymentGatewayApi: PaymentGatewayApi;
    widgetApi: WidgetApi;
    disbursementApi: DisbursementApi;
    constructor({ partnerId, privateKey, origin, env }?: DanaOpts);
}
export default Dana;
