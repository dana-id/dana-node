/* tslint:disable */
/* eslint-disable */
import 'dotenv/config'

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

export class Dana {
    opts: DanaOpts;
    paymentGatewayApi: PaymentGatewayApi;
    widgetApi: WidgetApi;
    disbursementApi: DisbursementApi;

    constructor({ partnerId, privateKey, origin, env }: DanaOpts = {}) {
        partnerId = partnerId ? partnerId : process.env.X_PARTNER_ID;
        privateKey = privateKey ? privateKey : process.env.PRIVATE_KEY;
        origin = origin ? origin : process.env.ORIGIN;
        env = env ? env : process.env.ENV;

        if (!partnerId) {
            throw new Error('Missing required environment variable: X_PARTNER_ID. Please set X_PARTNER_ID in your environment or .env file.');
        }

        if (!privateKey) {
            throw new Error('Missing required environment variable: PRIVATE_KEY. Please set PRIVATE_KEY in your environment or .env file.');
        }

        if (!env) {
            throw new Error('Missing required environment variable: ENV. Please set ENV in your environment or .env file.');
        }

        this.opts = {
            partnerId,
            privateKey,
            origin,
            env
        };

        this.paymentGatewayApi = new PaymentGatewayApi(this.opts);

        this.widgetApi = new WidgetApi(this.opts);

        this.disbursementApi = new DisbursementApi(this.opts);
    }
}

export default Dana;