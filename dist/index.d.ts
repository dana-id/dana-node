import 'dotenv/config';
export * from './runtime';
import { PaymentGatewayApi } from './payment_gateway/v1';
import { WidgetApi } from './widget/v1';
import { DisbursementApi } from './disbursement/v1';
import { MerchantManagementApi } from './merchant_management/v1';
export interface DanaOpts {
    partnerId?: string;
    privateKey?: string;
    origin?: string;
    env?: string;
    clientSecret?: string;
    debugMode?: string;
}
export declare class Dana {
    opts: DanaOpts;
    paymentGatewayApi: PaymentGatewayApi;
    widgetApi: WidgetApi;
    disbursementApi: DisbursementApi;
    merchantManagementApi: MerchantManagementApi;
    constructor({ partnerId, privateKey, origin, env, clientSecret, debugMode }?: DanaOpts);
}
export default Dana;
